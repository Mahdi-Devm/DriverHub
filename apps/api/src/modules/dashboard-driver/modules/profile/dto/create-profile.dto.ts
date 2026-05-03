import { GenderEnum } from '@shared/enums/gender.enum';
import { IsEnum, IsNumber, IsString, Min } from 'class-validator';

export class CreateBasicProfileDto {
  @IsString()
  fullName: string;

  @IsEnum(GenderEnum)
  gender: GenderEnum;

  @IsString()
  licenseNumber: string;

  @IsNumber()
  @Min(0)
  experienceYears: number;

  @IsString()
  carModel: string;

  @IsString()
  carColor: string;

  @IsString()
  bankAccountNumber: string;
}
