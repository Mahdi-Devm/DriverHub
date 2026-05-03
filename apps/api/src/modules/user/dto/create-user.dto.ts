import { Roles } from '@shared/enums/role.enum';
import { IsBoolean, IsEnum, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @IsBoolean()
  isActive: boolean;

  @IsEnum(Roles)
  role: Roles;
}
