import { PartialType } from '@nestjs/mapped-types';
import { CreateGunguDto } from './create-gungu.dto';

export class UpdateGunguDto extends PartialType(CreateGunguDto) {}
