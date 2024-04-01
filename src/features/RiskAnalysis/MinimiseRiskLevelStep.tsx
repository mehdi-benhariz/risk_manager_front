import { Heading, Stack, StackProps } from '@chakra-ui/react';
import { FormizStep } from '@formiz/core';

import { FieldInput } from '@/components/FieldInput';

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
        <Stack {...StackParam}>
          <FieldInput
            name="b1"
            label="Exemples de mesures dissuasives pertinentes pour ce scénario :"
          />
          <FieldInput name="b2" label="Sélection du niveau de mesure" />
        </Stack>
        <Stack {...StackParam}>
          <FieldInput name="b3" label="Indiquez vos mesures mises en places" />
        </Stack>
        <Heading size="lg">Mesures préventives</Heading>
        <Stack {...StackParam}>
          <FieldInput
            name="b4"
            label="Exemples de mesures préventives pertinentes pour ce scénario :"
          />
        </Stack>
        <Stack {...StackParam}>
          <FieldInput name="b5" label="Sélection du niveau de mesure" />
          <FieldInput name="b6" label="Indiquez vos mesures mises en places" />
        </Stack>
        <Stack {...StackParam}>
          <FieldInput
            name="b7"
            label="Potentialité résiduelle résultante (Pr)"
          />
          <FieldInput
            name="b8"
            label="Potentialité résiduelle personnalisée (Pr*)"
          />
        </Stack>
      </Stack>
    </FormizStep>
  );
};
