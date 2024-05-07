import { FC } from 'react';

import { Heading, Stack, StackProps } from '@chakra-ui/react';
import { FormizStep } from '@formiz/core';

import { FieldHidden } from '@/components/FieldHidden';
import { FieldInput } from '@/components/FieldInput';
import { FieldSelect } from '@/components/FieldSelect';
import { FieldTextarea } from '@/components/FieldTextarea';

import { LevelsOptions, OptionsType } from './RiskDescriptionStep';

const StackParam = {
  direction: { base: 'column', md: 'row' },
  spacing: 4,
  mb: 4,
} as StackProps;
type MinimiseRiskLevelStepProps = {
  measureLevelsOptions: OptionsType[];
};
export const MinimiseRiskLevelStep: FC<MinimiseRiskLevelStepProps> = ({
  measureLevelsOptions,
}) => {
  return (
    <FormizStep name="step 2" order={2}>
      <Stack>
        <Heading>2. Réduction du niveau de risque</Heading>

        <Heading size="lg">Mesures dissuasives</Heading>
        <Stack {...StackParam}>
          <FieldSelect
            name="measures[0].measure_level_id"
            label="Sélection du niveau de mesure"
            options={measureLevelsOptions}
          />
        </Stack>
        <Stack {...StackParam}>
          <FieldHidden name="measures[0].type" defaultValue="DETERRENT" />
          <FieldTextarea
            name="measures[0].measure"
            label="Indiquez vos mesures mises en places"
          />
        </Stack>
        <Heading size="lg">Mesures préventives</Heading>

        <Stack {...StackParam}>
          <FieldSelect
            name="measures[1].measure_level_id"
            label="Sélection du niveau de mesure"
            options={measureLevelsOptions}
          />
          <FieldHidden name="measures[1].type" defaultValue="PREVENTIVE" />
          <FieldInput
            name="measures[1].measure"
            label="Indiquez vos mesures mises en places"
          />
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
