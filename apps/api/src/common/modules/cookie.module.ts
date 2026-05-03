import { Global, Module } from '@nestjs/common';
import { CookieService } from '@shared/services/cookie.service';

@Global()
@Module({
  providers: [CookieService],
  exports: [CookieService],
})
export class CookieModule {}
