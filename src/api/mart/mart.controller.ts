import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MartService } from './mart.service';
import { CreateMartDto } from './dto/create-mart.dto';
import { UpdateMartDto } from './dto/update-mart.dto';

@Controller('mart')
export class MartController {
  constructor(private readonly martService: MartService) {}

  @Post()
  create(@Body() createMartDto: CreateMartDto) {
    return this.martService.create(createMartDto);
  }

  @Get()
  findAll() {
    return this.martService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.martService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMartDto: UpdateMartDto) {
    return this.martService.update(+id, updateMartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.martService.remove(+id);
  }
}
