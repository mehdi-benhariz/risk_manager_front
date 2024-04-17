import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

const triggerEventsFactoryKey = {
  all: () => ['triggerEvents'],
  list: () => [...triggerEventsFactoryKey.all(), 'list'],
};

type TriggerEventsType = {
  id: number;
  code_type: string;
  type: string;
  code: string;
  event: string;
  standard_natural_exposure: number;
  decision_natural_exposure: number;
  result_natural_exposure: number;
  comment: string;
  isSelected?: boolean;
};

export const useTriggerEventsList = () =>
  useQuery(
    triggerEventsFactoryKey.list(),
    (): Promise<{ data: TriggerEventsType[] }> => Axios.get('/trigger_event/')
  );
