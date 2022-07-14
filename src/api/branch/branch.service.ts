import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Branch } from './entities/branch.entity';

@Injectable()
export class BranchService {

  constructor(
    @InjectRepository(Branch)
    private readonly branchRepo: Repository<Branch>
  ) { this.branchRepo = branchRepo }

  // 선택한 마트의 정보 가져오기
  async findOne(id: number, lat: number, lng: number, language: string): Promise<Branch> {
    const projection: string[] = [
      `round(st_distance_sphere(branch_loc, ST_GeomFromText('POINT(${lng} ${lat})')) / 1000, 2) as distance`,
      "branch_name", "branch_open_time", "branch_close_time", "branch_number",
      "branch_holiday",
      "ST_X(branch_loc) as lng", "ST_Y(branch_loc) as lat"
    ]

    // 한국어일 경우 지번, 도로명주소 반환
    if (language == "ko") {
      projection.push("branch_road_address", "branch_jibun_address")
    }
    // 영어일 경우 영문주소 반환
    else {
      projection.push("branch_english_address")
    }

    const branch: Branch = await this.branchRepo.createQueryBuilder('branch')
      .select(projection)
      .where("mart_branch_id= :id", { id: id })
      .getRawOne()

    return branch
  }

  // 설정해 놓은 반경 내 대형마트들을 조회
  async findNearBranches(lat: number, lng: number): Promise<Branch[]> {
    // 참고자료 : https://purumae.tistory.com/198
    // 한 변의 길이(반경 : 길이 / 2)
    const range: number = (Number(process.env.RANGE) | 50) * 1000 // km로 변환

    // 내 위치에서 동쪽 또는 서쪽으로 range / 2 km만큼 떨어지기 위해 필요한 경도의 차이값
    const lng_diff: string = `${range} / 2 / ST_DISTANCE_SPHERE(POINT(${lng}, ${lat}), POINT(${lng} + IF(${lng} < 0, 1, -1), ${lat}))`;

    // 내 위치에서 남쪽 또는 북쪽으로 range / 2 km만큼 떨어지기 위해 필요한 위도의 차이값
    const lat_diff: string = `${range} / 2 / ST_DISTANCE_SPHERE(POINT(${lng}, ${lat}), POINT(${lng}, ${lat} + IF(${lat} < 0, 1, -1)))`;

    // MBR의 대각선 = LINESTRING(좌표1, 좌표2)
    const diagonal: string = `CONCAT('LINESTRING(', ${lng} -  IF(${lng} < 0, 1, -1) * ${lng_diff}, ' ', ${lat} -  IF(@lon < 0, 1, -1) * ${lat_diff}, ',', ${lng} +  IF(${lng} < 0, 1, -1) * ${lng_diff}, ' ', ${lat} +  IF(${lng} < 0, 1, -1) * ${lat_diff}, ')')`;

    const branches: Branch[] = await this.branchRepo.createQueryBuilder('branch')
      .select(['mart_id, branch_name, ST_X(branch_loc) as lng, ST_Y(branch_loc) as lat'])
      .where(`MBRCONTAINS(ST_LINESTRINGFROMTEXT(${diagonal}), branch_loc)`)
      .getRawMany()

    return branches
  }
}
