import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Branch } from 'src/api/branch/entities/branch.entity';
import { Repository } from 'typeorm';

const days = ['일', '월', '화', '수', '목', '금', '토']

@Injectable()
export class CronjobService {

    private readonly logger = new Logger(CronjobService.name)

    constructor(
        @InjectRepository(Branch)
        private readonly branchRepo: Repository<Branch>
    ) { this.branchRepo = branchRepo }

    @Cron('0 4 1 * *', {
        timeZone: 'Asia/Seoul'
    })
    async handleCron() {
        const branches = await this.branchRepo.find({
            where: {
                branch_use: true,
                is_branch_large_scale_store: true
            }
        })

        // 금일의 날짜 가져오기
        const nowDate = new Date()

        const year = nowDate.getFullYear()

        // 달은 시작이 0부터 11이므로 1을 차감해주어야됨
        const month = nowDate.getMonth() - 1

        // 매달 첫번째 요일
        const firstDay = new Date(nowDate.getFullYear(), month).getDay()

        const holidayDate = new Date(year, month)

        // 1일이 일요일 경우를 대비
        const sub = firstDay || 7

        for await (const branch of branches) {
            // 첫번째 휴무일
            const firstHoliday = branch.branch_holiday_one - sub

            // 두번째 휴무일
            const secondHoliday = branch.branch_holiday_two - sub

            // 지자체 조례 및 관련 법령에 따라 연중무휴일 경우 다음 지점으로 이동
            // 연중무휴지점 지자체
            // 울산 - 울주군
            if (firstHoliday == 0 || secondHoliday == 0) {
                continue
            }

            holidayDate.setDate(firstHoliday)

            // 휴무일 날짜
            const firstHolidayWeek = holidayDate.getHolidayWeek()

            holidayDate.setDate(secondHoliday)

            // 휴무일 날짜
            const secondHolidayWeek = holidayDate.getHolidayWeek()

            const holiday = `${month}월 ${firstHoliday}일(${firstHolidayWeek}요일), ${month}월 ${secondHoliday}일(${secondHolidayWeek}요일)`

            // 휴무일 
            branch.branch_holiday = holiday

            // 내용 변경
            await this.branchRepo.save(branch)
        }
    }
}

declare global {
    interface Date {
        getHolidayWeek(): string;
    }
}

// 휴무일 날짜
Date.prototype.getHolidayWeek = function (this: Date) {
    return days[this.getDay()]
};