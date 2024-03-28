import { faker } from '@faker-js/faker';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import Axios, { AxiosError } from 'axios';

const actifsPrimairesFactoryKey = {
  all: () => ['actifsPrimaires'],
  list: () => [...actifsPrimairesFactoryKey.all(), 'list'],
};

type ActifsSupportType = {
  id: number;
  element: string;
  name: string;
  actif_type: string;
  isSelected: boolean;
};

export const useActifsSupportList = (
  config: UseQueryOptions<
    ActifsSupportType[],
    AxiosError,
    ActifsSupportType[]
  > = {}
) =>
  useQuery(
    actifsPrimairesFactoryKey.list(),
    (): Promise<ActifsSupportType[]> =>
      Promise.resolve(
        Array.from({ length: 20 }, (_, i) => ({
          element: faker.lorem.words(3),
          id: faker.number.int({ min: 1000, max: 9999 }),
          name: faker.lorem.word(),
          actif_type: faker.lorem.word(),
          isSelected: faker.datatype.boolean(),
        }))
      )
    //    Axios.get('/support_actif/'),
  );
