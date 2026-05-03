import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class VerifyOtpDto {
  @IsNotEmpty({ message: 'کد تایید نمی‌ تواند خالی باشد' })
  @Length(6, 6, { message: 'کد تایید باید ۶ رقمی باشد' })
  @Matches(/^\d+$/, { message: 'کد تایید باید فقط شامل اعداد باشد' })
  @ApiProperty({
    example: '123456',
  })
  @IsString()
  otp: string;

  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    example: '+989131234567',
  })
  @IsPhoneNumber('IR', { message: 'شماره تلفن معتبر وارد کنید.' })
  phone: string;
}
