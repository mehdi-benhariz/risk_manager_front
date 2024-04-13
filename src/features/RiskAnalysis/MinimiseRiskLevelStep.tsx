import { Heading, Stack, StackProps } from '@chakra-ui/react';
import { FormizStep } from '@formiz/core';

import { FieldInput } from '@/components/FieldInput';
import { FieldSelect } from '@/components/FieldSelect';
import { FieldTextarea } from '@/components/FieldTextarea';

import { LevelsOptions } from './RiskDescriptionStep';

const StackParam = {
  direction: { base: 'column', md: 'row' },
  spacing: 4,
  mb: 4,
} as StackProps;

export const MinimiseRiskLevelStep = () => {
  return (
    <FormizStep name="step 2" order={2}>
      <Stack>
        <Heading>2. Réduction du niveau de risque</Heading>

        <Heading size="lg">Mesures dissuasives</Heading>
        <Stack {...StackParam}>
          <FieldSelect
            name="mesure_level"
            label="Sélection du niveau de mesure"
          />
          {
            // listing of mesure & helper is the mesure level desription
          }
        </Stack>
        <Stack {...StackParam}>
          {
            // create mesur  and  assigne it to risque
          }
          <FieldTextarea
            name="mesure"
            label="Indiquez vos mesures mises en places"
          />
          {
            // handel the creation of the mesur and assigne the id of mesure to "mesure_id"
          }
        </Stack>
        <Heading size="lg">Mesures préventives</Heading>

        <Stack {...StackParam}>
          <FieldInput name="b5" label="Sélection du niveau de mesure" />
          <FieldInput name="b6" label="Indiquez vos mesures mises en places" />
        </Stack>
        <Stack {...StackParam}>
          <FieldSelect
            name="residual_potential"
            label="Potentialité résiduelle résultante (Pr)"
            options={LevelsOptions}
          />

          <FieldSelect
            name="personalized_residual_potential"
            label="Potentialité résiduelle personnalisée (Pr*)"
            options={LevelsOptions}
          />
        </Stack>
      </Stack>
    </FormizStep>
  );
};
