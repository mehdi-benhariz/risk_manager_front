import { Box, Center, Spinner, useToast } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';

import { MultiStepsLayout } from '@/components/MultiStepsLayout';

import { useActifsPrimairesList } from '../PageActifsPrimaires/AcrifsPromairesServices';
import { DesisionStep } from './DesisionStep';
import { MesserRiskLevelStep } from './MesserRiskLevelStep';
import { MinimiseRiskLevelStep } from './MinimiseRiskLevelStep';
import { RiskDescriptionStep } from './RiskDescriptionStep';

export default function PageRiskAnalysis() {
  const toastValues = useToast();
  const { data, isLoading } = useActifsPrimairesList();
  const optionActifsPrimaires = data?.map((actif) => ({
    value: actif.id,
    label: actif.description,
  }));
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
        {isLoading && (
          <Center>
            <Spinner />
          </Center>
        )}
        {!isLoading && (
          <Formiz connect={form} autoForm="step">
            <MultiStepsLayout submitLabel="✔️">
              <RiskDescriptionStep
                optionActifsPrimaires={optionActifsPrimaires || []}
              />
              <MinimiseRiskLevelStep />
              <MesserRiskLevelStep />
              <DesisionStep />
            </MultiStepsLayout>
          </Formiz>
        )}
      </Box>
    </Center>
  );
}
