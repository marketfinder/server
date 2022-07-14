import { Controller, Get, Param, Query } from '@nestjs/common';
import { BranchService } from './branch.service';

@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) { }

  // 선택한 대형마트의 정보
  @Get(':id')
  findOne(@Param('id') id: string, @Query('lat') lat: number, @Query('lng') lng: number, @Query('hl') hl: string) {
    const language: string = hl == "en" ? "en" : "ko"

    return this.branchService.findOne(+id, lat, lng, language);
  }

  // 설정해놓은 반경 내 대형마트들의 목록
  @Get("")
  findNearBranches(@Query('lat') lat: number, @Query('lng') lng: number) {
    return this.branchService.findNearBranches(lat, lng)
  }
}