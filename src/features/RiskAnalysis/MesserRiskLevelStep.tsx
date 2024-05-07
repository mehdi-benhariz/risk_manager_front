import { FC } from 'react';

import { Heading, Stack, StackProps } from '@chakra-ui/react';
import { FormizStep } from '@formiz/core';

import { FieldHidden } from '@/components/FieldHidden';
import { FieldInput } from '@/components/FieldInput';
import { FieldSelect } from '@/components/FieldSelect';

import { LevelsOptions, OptionsType } from './RiskDescriptionStep';

const StackParam = {
  direction: { base: 'column', md: 'row' },
  spacing: 4,
  mb: 4,
} as StackProps;

type MesserRiskLevelStepProps = {
  measureLevelsOptions: OptionsType[];
};

export const MesserRiskLevelStep: FC<MesserRiskLevelStepProps> = ({
  measureLevelsOptions,
}) => {
  return (
    <FormizStep name="step 3" order={3}>
      <Stack>
        <Heading>Mesures de réduction de l&apos;Impact</Heading>
        <Stack {...StackParam}>
          <FieldSelect
            options={measureLevelsOptions}
            name="measures[2].measure_level_id"
            label="Sélection du niveau de mesure"
          />
        </Stack>
        <FieldHidden name="measures[2].type" defaultValue="CONTAINMENT" />

        <Stack {...StackParam}>
          <FieldInput
            name="measures[2].measure"
            label="Indiquez vos mesures mises en places"
          />
        </Stack>
        <Heading size="lg">Mesures palliatives</Heading>

        <Stack {...StackParam}>
          <FieldSelect
            options={measureLevelsOptions}
            name="measures[3].measure_level_id"
            label="Sélection du niveau de mesure"
          />
          <FieldHidden name="measures[3].type" defaultValue="PALLIATE" />
          <FieldInput
            name="measures[0].measure"
            label="Indiquez vos mesures mises en places"
          />
        </Stack>
        <Stack {...StackParam}>
          <FieldSelect
            name="residual_impact"
            label="Impact résiduel résultant (Ir)"
            options={LevelsOptions}
          />

          {/* <FieldInput name="residual_impact" label="Impact résiduel résultant (Ir)" /> */}
          {/* <FieldInput name="c8" label="Impact résiduel personnalisé (Ir*)" /> */}
        </Stack>
        <Stack {...StackParam}>
          {/* 
          // for update
          <FieldInput
            name="c9"
            label="Gravité résiduelle du scénario
[Gr = f(Ir,Ir* ; Pr,Pr*)])"
          /> */}
        </Stack>
      </Stack>
    </FormizStep>
  );
};
