import { FC } from 'react';

import { Heading, Stack } from '@chakra-ui/react';
import { FormizStep } from '@formiz/core';

import { FieldSelect } from '@/components/FieldSelect';
import { FieldTextarea } from '@/components/FieldTextarea';

import { DecisionType } from './decision.service';

type DecisionStepProps = {
  decision: DecisionType[];
};
export const DecisionStep: FC<DecisionStepProps> = ({ decision }) => {
  const decisionOptions = decision.map((dec) => ({
    label: dec?.decision_result,
    value: dec?.id,
  }));

  return (
    <FormizStep name="step 4" order={4}>
      <Stack>
        <Heading>3. Décision</Heading>
        <FieldSelect
          name="decision_id"
          label="Décision prise"
          options={decisionOptions}
        />
        <Heading>4. Commentaire</Heading>
        <FieldTextarea
          name="comment"
          label="Mettez dans la case ci-contre tout commentaire éventuel que vous souhaiteriez conserver"
        />
      </Stack>
    </FormizStep>
  );
};
