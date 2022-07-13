import { PartialType } from '@nestjs/mapped-types';
import { CreateSidoDto } from './create-sido.dto';

export class UpdateSidoDto extends PartialType(CreateSidoDto) {}
