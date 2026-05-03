import { PartialType } from '@nestjs/swagger';
import { CreateAuthDto } from './create-phone.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
