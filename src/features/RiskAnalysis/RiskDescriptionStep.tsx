import { Heading, Stack, StackProps } from '@chakra-ui/react';
import { FormizStep } from '@formiz/core';

import { FieldInput } from '@/components/FieldInput';

const StackParam = {
  direction: { base: 'column', md: 'row' },
  spacing: 4,
  mb: 4,
} as StackProps;

export const RiskDescriptionStep = () => {
  return (
    <FormizStep name="step 1" order={1}>
      <Stack>
        <Heading>1. Description du risque</Heading>
        <Stack {...StackParam}>
          <FieldInput name="a1" label="a. Dysfonctionnement redouté" />
          <FieldInput name="a2" label="b. Actif primaire concerné" />
        </Stack>
        <Stack {...StackParam}>
          <FieldInput name="a3" label="c. Type de conséquence (D,I,C,E)" />
          <FieldInput name="a4" label="d. Actif support concerné" />
        </Stack>
        <Stack {...StackParam}>
          <FieldInput name="a5" label="Impact intrinsèque (Ii)" />
          <FieldInput name="a6" label="Impact intrinsèque personnalisé (Ii*)" />
        </Stack>
        <Stack {...StackParam}>
          <FieldInput name="a7" label="e. Type de dommage" />
          <FieldInput name="a8" label="f. Type d'événement déclencheur" />
        </Stack>
        <Stack {...StackParam}>
          <FieldInput name="a9" label="g. Événement déclencheur" />
          <FieldInput name="a10" label="Potentialité intrinsèque (Pi)" />
        </Stack>
        <Stack {...StackParam}>
          <FieldInput
            name="a11"
            label="Potentialité intrinsèque personnalisé (Pi*)"
          />
          <FieldInput
            name="a12"
            label="Gravité intrinsèque
[Gi = f(Ii,Ii* ; Pi,Pi*)]"
          />
        </Stack>
      </Stack>
    </FormizStep>
  );
};
