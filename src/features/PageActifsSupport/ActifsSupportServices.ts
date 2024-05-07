import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

const actifsSupportFactoryKey = {
  all: () => ['actifSupports'],
  list: () => [...actifsSupportFactoryKey.all(), 'list'],
};

type ActifsSupportType = {
  id: number;
  element: string;
  name: string;
  type: string;
  selection: boolean;
};

export const useActifsSupportList = () =>
  useQuery(
    actifsSupportFactoryKey.list(),
    async (): Promise<ActifsSupportType[]> => {
      const response = await Axios.get('/support_actif/');
      return response?.data;
    }
    //    Axios.get('/support_actif/'),
  );
