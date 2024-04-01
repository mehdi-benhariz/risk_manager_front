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
  type: string;
  selection: boolean;
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
    async (): Promise<ActifsSupportType[]> => {
      const response = await Axios.get('/support_actif/');
      return response?.data;
    }
    //    Axios.get('/support_actif/'),
  );
