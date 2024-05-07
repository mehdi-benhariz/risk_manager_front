import { FC } from 'react';

import { Heading, Stack, StackProps } from '@chakra-ui/react';
import { FormizStep } from '@formiz/core';

import { FieldSelect } from '@/components/FieldSelect';

const StackParam = {
  direction: { base: 'column', md: 'row' },
  spacing: 4,
  mb: 4,
} as StackProps;

export type OptionsType = {
  value: Number;
  label: String;
};

type RiskDescriptionStepProps = {
  actifsSupportOptions?: OptionsType[];
  optionActifsPrimaires?: OptionsType[];
  damagesOptions?: OptionsType[];
  triggerEventsOptions?: OptionsType[];
};
export const LevelsOptions = [
  { value: 1, label: '1 Non significatif' },
  { value: 2, label: '2 Important' },
  { value: 3, label: '3 très grave' },
  { value: 4, label: '4 Vital' },
];
export const RiskDescriptionStep: FC<RiskDescriptionStepProps> = ({
  optionActifsPrimaires,
  actifsSupportOptions,
  damagesOptions,
  triggerEventsOptions,
}) => {
  const typeConsequenceOptions = [
    { value: 'D', label: 'D: ' },
    { value: 'I', label: 'I: ' },
    { value: 'C', label: 'C: ' },
    { value: 'E', label: 'E: ' },
  ];

  return (
    <FormizStep name="step 1" order={1}>
      <Stack>
        <Heading>1. Description du risque</Heading>
        <Stack {...StackParam}>
          <FieldSelect
            required
            name="primary_actif_id"
            label="b. Actif primaire concerné"
            options={optionActifsPrimaires}
          />
        </Stack>
        <Stack {...StackParam}>
          <FieldSelect
            required
            name="consequence_type"
            label="c. Type de conséquence (D,I,C,E)"
            options={typeConsequenceOptions}
          />
          <FieldSelect
            required
            name="support_actif_id"
            label="d. Actif support concerné"
            options={actifsSupportOptions}
          />
        </Stack>
        <Stack {...StackParam}>
          <FieldSelect
            required
            name="intrinsic_impact"
            label="Impact intrinsèque (Ii)"
            options={LevelsOptions}
          />
          <FieldSelect
            required
            name="personalized_intrinsic_impact"
            label="Impact intrinsèque personnalisé (Ii*)"
            options={LevelsOptions}
          />
        </Stack>
        <Stack {...StackParam}>
          <FieldSelect
            required
            name="damage_id"
            label="e. Type de dommage"
            options={damagesOptions}
          />
          <FieldSelect
            required
            name="trigger_event_id"
            label="f. Type d'événement déclencheur"
            options={triggerEventsOptions}
          />
        </Stack>
        <Stack {...StackParam}>
          <FieldSelect
            required
            name="intrinsic_potential"
            label="Potentialité intrinsèque (Pi)"
            options={LevelsOptions}
          />
        </Stack>
        <Stack {...StackParam}>
          {/*
          we will add this in update
          <FieldInput
            name="a12"
            isDisabled
            label="Gravité intrinsèque
[Gi = f(Ii,Ii* ; Pi,Pi*)]"
          />
  */}
        </Stack>
      </Stack>
    </FormizStep>
  );
};
