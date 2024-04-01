import { FC } from 'react';

import { Heading, Stack, StackProps } from '@chakra-ui/react';
import { FormizStep } from '@formiz/core';

import { FieldInput } from '@/components/FieldInput';
import { FieldSelect } from '@/components/FieldSelect';

const StackParam = {
  direction: { base: 'column', md: 'row' },
  spacing: 4,
  mb: 4,
} as StackProps;

type RiskDescriptionStepProps = {
  optionActifsPrimaires?: { value: string; label: string }[];
};
export const RiskDescriptionStep: FC<RiskDescriptionStepProps> = ({
  optionActifsPrimaires,
}) => {
  const levelsOptions = [
    { value: '1', label: '1 Non significatif' },
    { value: '2', label: '2 Important' },
    { value: '3', label: '3 très grave' },
    { value: '4', label: '4 Vital' },
  ];
  return (
    <FormizStep name="step 1" order={1}>
      <Stack>
        <Heading>1. Description du risque</Heading>
        <Stack {...StackParam}>
          <FieldInput name="a1" label="a. Dysfonctionnement redouté" />
          <FieldSelect
            name="a2"
            label="b. Actif primaire concerné"
            options={optionActifsPrimaires}
          />
        </Stack>
        <Stack {...StackParam}>
          <FieldInput name="a3" label="c. Type de conséquence (D,I,C,E)" />
          <FieldInput name="a4" label="d. Actif support concerné" />
        </Stack>
        <Stack {...StackParam}>
          <FieldSelect
            name="a5"
            label="Impact intrinsèque (Ii)"
            options={levelsOptions}
          />
          <FieldSelect
            name="a6"
            label="Impact intrinsèque personnalisé (Ii*)"
            options={levelsOptions}
          />
        </Stack>
        <Stack {...StackParam}>
          <FieldInput name="a7" label="e. Type de dommage" />
          <FieldInput name="a8" label="f. Type d'événement déclencheur" />
        </Stack>
        <Stack {...StackParam}>
          <FieldSelect
            name="a9"
            label="g. Événement déclencheur"
            options={levelsOptions}
          />{' '}
          <FieldSelect
            name="a10"
            label="Potentialité intrinsèque (Pi)"
            options={levelsOptions}
          />
        </Stack>
        <Stack {...StackParam}>
          <FieldSelect
            name="a11"
            label="Potentialité intrinsèque personnalisé (Pi*)"
            options={levelsOptions}
          />
          <FieldInput
            name="a12"
            isDisabled
            label="Gravité intrinsèque
[Gi = f(Ii,Ii* ; Pi,Pi*)]"
          />
        </Stack>
      </Stack>
    </FormizStep>
  );
};
