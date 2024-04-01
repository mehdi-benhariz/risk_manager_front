import { Heading, Stack } from '@chakra-ui/react';
import { FormizStep } from '@formiz/core';

import { FieldTextarea } from '@/components/FieldTextarea';

export const CommentsStep = () => {
  return (
    <FormizStep name="step 5" order={5}>
      <Stack>
        <Heading>4. Commentaire</Heading>
        <FieldTextarea
          name="d1"
          label="Mettez dans la case ci-contre tout commentaire éventuel que vous souhaiteriez conserver"
        />
      </Stack>
    </FormizStep>
  );
};
