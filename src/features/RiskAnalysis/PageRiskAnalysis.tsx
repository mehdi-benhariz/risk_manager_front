import { Box, Center, useToast } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';

import { MultiStepsLayout } from '@/components/MultiStepsLayout';

import { CommentsStep } from './CommentsStep';
import { DesisionStep } from './DesisionStep';
import { MesserRiskLevelStep } from './MesserRiskLevelStep';
import { MinimiseRiskLevelStep } from './MinimiseRiskLevelStep';
import { RiskDescriptionStep } from './RiskDescriptionStep';

export default function PageRiskAnalysis() {
  const toastValues = useToast();

  const form = useForm({
    onValidSubmit: (values) => {
      toastValues({
        title: JSON.stringify(values, null, 2),
      });
    },
  });

  return (
    <Center minH="calc( 100vh - 4rem)">
      <Box w={{ base: '90%', md: '60%' }}>
        <Formiz connect={form} autoForm="step">
          <MultiStepsLayout submitLabel="Submit">
            <RiskDescriptionStep />
            <MinimiseRiskLevelStep />
            <MesserRiskLevelStep />
            <DesisionStep />
            <CommentsStep />
          </MultiStepsLayout>
        </Formiz>
      </Box>
    </Center>
  );
}
