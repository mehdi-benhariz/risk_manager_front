import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

import { apiMethod } from '@/app/api/jhipster-mocks/helpers';

export const GET = apiMethod({
  public: true,
  handler: async () => {
    console.log('GET /primary_actif/');
    return NextResponse.json(
      Array.from({ length: 20 }, (_, i) => ({
        id: faker.number.int(),
        code: faker.lorem.word(),
        description: faker.lorem.sentence(),
        complementary_description: faker.lorem.sentence(),
        actif_type: faker.lorem.word(),
        impact_level: faker.lorem.word(),
      }))
    );
  },
});
