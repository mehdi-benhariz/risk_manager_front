import { faker } from '@faker-js/faker';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import Axios, { AxiosError } from 'axios';

const actifsPrimairesFactoryKey = {
  all: () => ['actifsPrimaires'],
  list: () => [...actifsPrimairesFactoryKey.all(), 'list'],
};

type DamagestType = {
  id: number;
  security_impact: string;
  consequence_type: string;
  name: string;
  damage_type: string;
  comment: string;
  isSelected: boolean;
};

export const useDamagestList = (
  config: UseQueryOptions<DamagestType[], AxiosError, DamagestType[]> = {}
) =>
  useQuery(
    actifsPrimairesFactoryKey.list(),
    (): Promise<DamagestType[]> =>
      Promise.resolve(
        Array.from({ length: 20 }, (_, i) => ({
          id: faker.number.int({ min: 1000, max: 9999 }),
          security_impact: faker.lorem.words(3),
          consequence_type: faker.lorem.words(8),
          name: faker.lorem.words(8),
          damage_type: faker.lorem.words(3),
          comment: faker.lorem.words(7),
          isSelected: faker.datatype.boolean(),
        }))
      )
    //    Axios.get('/damage/'),
  );
