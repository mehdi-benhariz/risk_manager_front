import { z } from 'zod';

export type LoginPayload = z.infer<ReturnType<typeof zLoginPayload>>;
export const zLoginPayload = () =>
  z.object({
    access_token: z.string(),
  });
