import { SetMetadata } from '@nestjs/common';

export const SkipProfileCheck = () =>
  SetMetadata(process.env.IS_PUBLIC_PROFILE_KEY, true);
