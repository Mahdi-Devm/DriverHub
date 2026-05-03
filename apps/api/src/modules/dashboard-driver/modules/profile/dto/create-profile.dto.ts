import { GenderEnum } from '@shared/enums/gender.enum';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';

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
export class CreateCompletProfileDto {
  @IsNotEmpty()
  age: number;

  @IsNumber()
  nationalCode: number;

  @IsNotEmpty()
  @IsBoolean()
  hasGlasses: boolean;

  @IsNotEmpty()
  @IsString()
  medicalConditions: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}
