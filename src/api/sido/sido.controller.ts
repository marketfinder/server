import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SidoService } from './sido.service';
import { CreateSidoDto } from './dto/create-sido.dto';
import { UpdateSidoDto } from './dto/update-sido.dto';

@Controller('sido')
export class SidoController {
  constructor(private readonly sidoService: SidoService) {}

  @Post()
  create(@Body() createSidoDto: CreateSidoDto) {
    return this.sidoService.create(createSidoDto);
  }

  @Get()
  findAll() {
    return this.sidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sidoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSidoDto: UpdateSidoDto) {
    return this.sidoService.update(+id, updateSidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sidoService.remove(+id);
  }
}
