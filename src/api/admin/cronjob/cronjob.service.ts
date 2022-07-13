import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

const days = ['일', '월', '화', '수', '목', '금', '토']

@Injectable()
export class CronjobService {

    private readonly logger = new Logger(CronjobService.name)

    @Cron('0 4 1 * *', {
        timeZone: 'Asia/Seoul'
    })
    async handleCron() {
    }
}