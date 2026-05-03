import { PartialType } from '@nestjs/swagger';
import { CreateBasicProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends PartialType(CreateBasicProfileDto) {}
