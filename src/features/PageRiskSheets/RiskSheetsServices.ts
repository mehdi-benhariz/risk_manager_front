import { faker } from '@faker-js/faker';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

const ruskSheetsFactoryKey = {
  all: () => ['ruskSheets'],
  list: () => [...ruskSheetsFactoryKey.all(), 'list'],
};

export type RiskSheetsType = {
  id: number;
  consequence_type: string;
  intrinsic_impact: number;
  personalized_intrinsic_impact: number;
  intrinsic_gravity: number;
  intrinsic_potential: number;
  residual_potential: number;
  personalized_residual_potential: number;
  residual_impact: number;
  comment: string;
  residual_gravity: number;
  decision: {
    id: number;
    decision_result: string;
  };
  trigger_event: {
    id: number;
    code_type: string;
    type: string;
    code: string;
    event: string;
    standard_natural_exposure: number;
    decision_natural_exposure: number;
    result_natural_exposure: number;
    comment: string;
  };
  support_actif: {
    id: number;
    name: string;
    type: string;
    element: string;
    selection: boolean;
  };
  damage: {
    id: number;
    security_impact: string;
    consequence_type: string;
    name: string;
    damage_type: string;
    comment: string;
    selection: boolean;
  };
  primary_actif: {
    id: number;
    code: string;
    description: string;
    complementary_description: string;
    actif_type: string;
    impact_level: string;
  };
};

export const useRiskSheetsList = ({ xField = '' }: { xField?: string }) =>
  useQuery(
    ruskSheetsFactoryKey.list(),
    (): Promise<{ data: RiskSheetsType[] }> =>
      Axios.get('/risk/', { headers: { 'X-Fields': xField } })
  );
