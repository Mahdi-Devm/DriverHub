import { SetMetadata } from '@nestjs/common';

export const Public = () => SetMetadata(process.env.IS_PUBLIC_KEY, true);
