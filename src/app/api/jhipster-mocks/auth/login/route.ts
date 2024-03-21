import { NextResponse } from 'next/server';
import { z } from 'zod';

import {
  apiMethod,
  badRequestResponse,
} from '@/app/api/jhipster-mocks/helpers';
import { login } from './service';

export const POST = apiMethod({
  demo: 'allowed',
  public: true,
  handler: async ({ req }) => {
    const bodyParsed = z
      .object({ username: z.string(), password: z.string() })
      .safeParse(await req.json());

    if (!bodyParsed.success) {
      return badRequestResponse();
    }

    const token = await login({
      login: bodyParsed.data.username,
      password: bodyParsed.data.password,
    });

    if (!token) {
      return badRequestResponse();
    }

    return NextResponse.json({ id_token: token });
  },
});
