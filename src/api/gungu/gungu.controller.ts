import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GunguService } from './gungu.service';
import { CreateGunguDto } from './dto/create-gungu.dto';
import { UpdateGunguDto } from './dto/update-gungu.dto';

@Controller('gungu')
export class GunguController {
  constructor(private readonly gunguService: GunguService) { }

  @Post()
  create(@Body() createGunguDto: CreateGunguDto) {
  }

  @Get()
  findAll() {
    return this.gunguService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gunguService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGunguDto: UpdateGunguDto) {
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gunguService.remove(+id);
  }
}
