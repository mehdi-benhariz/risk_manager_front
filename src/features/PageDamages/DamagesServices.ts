import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

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
  selection: boolean;
};

export const useDamagestList = () =>
  useQuery(
    actifsPrimairesFactoryKey.list(),
    async (): Promise<DamagestType[]> => {
      const response = await Axios.get('/damage/');
      return response?.data;
    }

    //    Axios.get('/damage/'),
  );
