import { faker } from '@faker-js/faker';
import { useQuery } from '@tanstack/react-query';

const ruskSheetsFactoryKey = {
  all: () => ['ruskSheets'],
  list: () => [...ruskSheetsFactoryKey.all(), 'list'],
};

type RiskSheetsType = {
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
  mesure_id: number;
  support_actif_id: number;
  damage_id: number;
  primary_actif_id: number;
  trigger_event_id: number;
  decision_id: number;
};

export const useRiskSheetsList = () =>
  useQuery(
    ruskSheetsFactoryKey.list(),
    (): Promise<RiskSheetsType[]> =>
      Promise.resolve(
        Array.from({ length: 20 }, () => ({
          id: faker.number.int({ min: 1000, max: 9999 }),
          consequence_type: faker.lorem.words(8),
          intrinsic_impact: faker.number.int({ min: 1000, max: 9999 }),
          personalized_intrinsic_impact: faker.number.int({
            min: 1000,
            max: 9999,
          }),
          intrinsic_gravity: faker.number.int({ min: 1000, max: 9999 }),
          intrinsic_potential: faker.number.int({ min: 1000, max: 9999 }),
          residual_potential: faker.number.int({ min: 1000, max: 9999 }),
          personalized_residual_potential: faker.number.int({
            min: 1000,
            max: 9999,
          }),
          residual_impact: faker.number.int({ min: 1000, max: 9999 }),
          comment: faker.lorem.sentence(),
          residual_gravity: faker.number.int({ min: 1000, max: 9999 }),
          mesure_id: faker.number.int({ min: 1000, max: 9999 }),
          support_actif_id: faker.number.int({ min: 1000, max: 9999 }),
          damage_id: faker.number.int({ min: 1000, max: 9999 }),
          primary_actif_id: faker.number.int({ min: 1000, max: 9999 }),
          trigger_event_id: faker.number.int({ min: 1000, max: 9999 }),
          decision_id: faker.number.int({ min: 1000, max: 9999 }),
        }))
      )
    //    Axios.get('/primary_actif/'),
  );
