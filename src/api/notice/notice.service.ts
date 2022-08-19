import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { Notice } from './entities/notice.entity';

@Injectable()
export class NoticeService {

  constructor(
    @InjectRepository(Notice)
    private readonly noticeRepo: Repository<Notice>
  ) { this.noticeRepo = noticeRepo }

  async create(createNoticeDto: CreateNoticeDto) {
  }

  // 공지 목록
  async findAll(page: number): Promise<Notice[]> {
    return this.noticeRepo
      .find({
        select: ['notice_id', 'notice_title', 'notice_type', 'branch_created_at'],
        where: {
          notice_use: true
        },
        skip: page * 10,
        take: 10,
      })
  }

  // 공지 세부내역 조회
  async findOne(id: number): Promise<Notice> {
    return await this.noticeRepo.findOne({
      where: {
        notice_id: id
      }
    })
  }

  // 공지 변경
  async update(id: number, updateNoticeDto: UpdateNoticeDto) {
    const notice: Notice = await this.noticeRepo.findOneBy({
      notice_id: id
    })
    delete notice.notice_title
    delete notice.notice_content
    delete notice.notice_type

    const updated: Notice = Object.assign(notice)

    await this.noticeRepo.save(updated)
  }

  // 공지 삭제
  async remove(id: number, isUse: boolean) {
    const notice: Notice = await this.noticeRepo.findOneBy({
      notice_id: id
    })
    notice.notice_use = isUse

    await this.noticeRepo.save(notice);
  }
}
