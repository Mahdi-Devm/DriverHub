import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    example: '+989131234567',
  })
  @IsPhoneNumber('IR', { message: 'شماره تلفن معتبر وارد کنید.' })
  phone: string;
}
