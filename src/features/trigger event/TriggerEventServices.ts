import { faker } from '@faker-js/faker';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import Axios, { AxiosError } from 'axios';

const triggerEventsFactoryKey = {
  all: () => ['triggerEvents'],
  list: () => [...triggerEventsFactoryKey.all(), 'list'],
};

type TriggerEventsType = {
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

export const useTriggerEventsList = (
  config: UseQueryOptions<
    TriggerEventsType[],
    AxiosError,
    TriggerEventsType[]
  > = {}
) =>
  useQuery(
    triggerEventsFactoryKey.list(),
    (): Promise<TriggerEventsType[]> =>
      Promise.resolve(
        Array.from({ length: 20 }, (_, i) => ({
          code_type: faker.lorem.word(4),
          type: faker.lorem.words(5),
          code: faker.lorem.word(4),
          event: faker.lorem.words(16),
          standard_natural_exposure: faker.helpers.arrayElement([1, 2, 3, 4]),
          decision_natural_exposure: faker.helpers.arrayElement([1, 2, 3, 4]),
          result_natural_exposure: faker.helpers.arrayElement([1, 2, 3, 4]),
          comment: faker.lorem.words(25),
          isSelected: faker.datatype.boolean(),
        }))
      )
    //    Axios.get('/primary_actif/'),
  );
