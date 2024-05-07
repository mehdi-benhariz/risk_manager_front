import { useMutation, useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import { all } from 'cypress/types/bluebird';

const decisionFactoryKey = {
  all: () => ['decision'],
  list: () => [...decisionFactoryKey.all(), 'list'],
};

const measureFactoryKey = {
  all: () => ['measure'],
  list: () => [...measureFactoryKey.all(), 'list'],
};
export type DecisionType = {
  id: Number;
  decision_result: String;
};
export const useDecision = () => {
  const api = useQuery(
    decisionFactoryKey.list(),
    (): Promise<{ data: DecisionType[] }> => Axios.get('/decision/    ')
  );

  return { ...api, data: api?.data?.data || [] };
};

export type MeasureType = {
  id: Number;
  measure: String;
  type: String;
  measure_level_id: Number;
};

export type MesureLevelType = {
  id: Number;
  level: String;
  description: String;
  definition: string;
};
export const useMeasureLevels = () => {
  const api = useQuery(
    measureFactoryKey.list(),
    (): Promise<{ data: MesureLevelType[] }> => Axios.get('/mesure_level/    ')
  );

  return { ...api, data: api?.data?.data || [] };
};
