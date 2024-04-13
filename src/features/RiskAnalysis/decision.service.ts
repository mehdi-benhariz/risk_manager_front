import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

const decisionFactoryKey = {
  all: () => ['decision'],
  list: () => [...decisionFactoryKey.all(), 'list'],
};

export type DecisionType = {
  id: Number;
  decision_result: String;
};
export const useDecision = () => {
  const api = useQuery(
    decisionFactoryKey.list(),
    (): Promise<{ data: DecisionType[] }> => Axios.get('decision')
  );

  return { ...api, data: api?.data?.data || [] };
};
