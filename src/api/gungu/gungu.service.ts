import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gungu } from './entities/gungu.entity';

@Injectable()
export class GunguService {

  constructor(
    @InjectRepository(Gungu)
    private gunguRepo: Repository<Gungu>
  ) { this.gunguRepo = gunguRepo }

  findAll() {
    return `This action returns all gungu`;
  }

  async findOne(id: number): Promise<Gungu> {
    const gungu = await this.gunguRepo.findOne({
      select: ['gungu_name'],
      where: {
        gungu_id: id
      }
    })

    return gungu
  }

  remove(id: number) {
    return `This action removes a #${id} gungu`;
  }
}
