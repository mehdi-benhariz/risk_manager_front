import { Heading, Stack, StackProps, Text } from '@chakra-ui/react';
import { FormizStep } from '@formiz/core';

import { FieldInput } from '@/components/FieldInput';

const StackParam = {
  direction: { base: 'column', md: 'row' },
  spacing: 4,
  mb: 4,
} as StackProps;

export const MesserRiskLevelStep = () => {
  return (
    <FormizStep name="step 3" order={3}>
      <Stack>
        <Heading>Mesures de réduction de l'Impact</Heading>
        <Stack {...StackParam}>
          <FieldInput
            name="c1"
            label="Exemples de mesures de confinement pertinentes pour ce scénario :"
          />
          <FieldInput name="c2" label="Sélection du niveau de mesure" />
        </Stack>
        <Stack {...StackParam}>
          <FieldInput name="c3" label="Indiquez vos mesures mises en places" />
        </Stack>
        <Heading size="lg">Mesures palliatives</Heading>
        <Stack {...StackParam}>
          <FieldInput
            name="c4"
            label="Exemples de mesures palliatives pertinentes pour ce scénario :"
          />
        </Stack>
        <Stack {...StackParam}>
          <FieldInput name="c5" label="Sélection du niveau de mesure" />
          <FieldInput name="c6" label="Indiquez vos mesures mises en places" />
        </Stack>
        <Stack {...StackParam}>
          <FieldInput name="c7" label="Impact résiduel résultant (Ir)" />
          <FieldInput name="c8" label="Impact résiduel personnalisé (Ir*)" />
        </Stack>
        <Stack {...StackParam}>
          <FieldInput
            name="c9"
            label="Gravité résiduelle du scénario
[Gr = f(Ir,Ir* ; Pr,Pr*)])"
          />
        </Stack>
      </Stack>
    </FormizStep>
  );
};
