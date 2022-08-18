
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactusDto } from './dto/create-contactus.dto';
import { UpdateContactusDto } from './dto/update-contactus.dto';
import { Contactus } from './entities/contactus.entity';

@Injectable()
export class ContactusService {

  constructor(
    @InjectRepository(Contactus)
    private readonly contactusRepo: Repository<Contactus>
  ) { this.contactusRepo = contactusRepo }

  async create(createContactusDto: CreateContactusDto) {
  }

  // 문의내용 목록
  async findAll(page: number): Promise<Contactus[]> {
    return this.contactusRepo
      .find({
        skip: page * 10,
        take: 10
      })
  }

  // 문의사항 조회
  async findOne(id: number): Promise<Contactus> {
    return await this.contactusRepo.findOne({
      where: {
        contactus_id: id
      }
    })
  }

  // 문의내용 변경
  async update(id: number, updateContactusDto: UpdateContactusDto) {
    const contactus: Contactus = await this.contactusRepo.findOneBy({
      contactus_id: id
    })

    await this.contactusRepo.save(contactus);
  }

  // 문의 삭제
  async remove(id: number, isUse: boolean) {
    const contactus: Contactus = await this.contactusRepo.findOneBy({
      contactus_id: id
    })

    await this.contactusRepo.save(contactus);
  }
}

