import { faker } from '@faker-js/faker';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import Axios, { AxiosError } from 'axios';

const actifsPrimairesFactoryKey = {
  all: () => ['actifsPrimaires'],
  list: () => [...actifsPrimairesFactoryKey.all(), 'list'],
};

type ActifsPrimairesType = {
  id: number;
  code: string;
  description: string;
  complementary_description: string;
  actif_type: string;
  impact_level: string;
};

export const useActifsPrimairesList = (
  config: UseQueryOptions<
    ActifsPrimairesType[],
    AxiosError,
    ActifsPrimairesType[]
  > = {}
) =>
  useQuery(
    actifsPrimairesFactoryKey.list(),
    (): Promise<ActifsPrimairesType[]> =>
      Promise.resolve(
        Array.from({ length: 20 }, (_, i) => ({
          id: faker.number.int({ min: 1000, max: 9999 }),
          code: faker.lorem.word().substring(0, 5),
          description: faker.lorem.words(8),
          complementary_description: faker.lorem.sentence(),
          actif_type: faker.lorem.word(),
          impact_level: faker.helpers.arrayElement(['D', 'I', 'C', 'E']),
        }))
      )
    //    Axios.get('/primary_actif/'),
  );
