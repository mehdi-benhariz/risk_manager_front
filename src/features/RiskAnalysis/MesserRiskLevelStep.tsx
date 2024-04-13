import { Heading, Stack, StackProps } from '@chakra-ui/react';
import { FormizStep } from '@formiz/core';

import { FieldInput } from '@/components/FieldInput';
import { FieldSelect } from '@/components/FieldSelect';

import { LevelsOptions } from './RiskDescriptionStep';

const StackParam = {
  direction: { base: 'column', md: 'row' },
  spacing: 4,
  mb: 4,
} as StackProps;

export const MesserRiskLevelStep = () => {
  return (
    <FormizStep name="step 3" order={3}>
      <Stack>
        <Heading>Mesures de réduction de l&apos;Impact</Heading>
        <Stack {...StackParam}>
          <FieldInput name="c2" label="Sélection du niveau de mesure" />
        </Stack>
        <Stack {...StackParam}>
          <FieldInput name="c3" label="Indiquez vos mesures mises en places" />
        </Stack>
        <Heading size="lg">Mesures palliatives</Heading>

        <Stack {...StackParam}>
          <FieldInput name="c5" label="Sélection du niveau de mesure" />
          <FieldInput name="c6" label="Indiquez vos mesures mises en places" />
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
