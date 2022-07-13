import { Injectable } from '@nestjs/common';
import { CreateSidoDto } from './dto/create-sido.dto';
import { UpdateSidoDto } from './dto/update-sido.dto';

@Injectable()
export class SidoService {
  create(createSidoDto: CreateSidoDto) {
    return 'This action adds a new sido';
  }

  findAll() {
    return `This action returns all sido`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sido`;
  }

  update(id: number, updateSidoDto: UpdateSidoDto) {
    return `This action updates a #${id} sido`;
  }

  remove(id: number) {
    return `This action removes a #${id} sido`;
  }
}
