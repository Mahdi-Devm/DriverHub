import { SetMetadata } from '@nestjs/common';

export const SkipTraineeProfileCheck = () =>
  SetMetadata(process.env.SKIP_TRAINEE_PROFILE_KEY, true);
