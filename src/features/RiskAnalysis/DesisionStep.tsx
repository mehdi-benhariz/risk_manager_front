import { Heading, Stack, StackProps } from '@chakra-ui/react';
import { FormizStep } from '@formiz/core';

import { FieldTextarea } from '@/components/FieldTextarea';

export const DesisionStep = () => {
  return (
    <FormizStep name="step 4" order={4}>
      <Stack>
        <Heading>3. Décision</Heading>
        <FieldTextarea name="d1" label="Décision prise" />
      </Stack>
    </FormizStep>
  );
};
