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
    async (): Promise<ActifsPrimairesType[]> => {
      const response = await Axios.get('/primary_actif/');
      return response?.data;
    }
  );
