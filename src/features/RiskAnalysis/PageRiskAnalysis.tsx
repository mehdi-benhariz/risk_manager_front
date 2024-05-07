import { Box, Center, Spinner, useToast } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { useNavigate } from 'react-router-dom';

import { MultiStepsLayout } from '@/components/MultiStepsLayout';

import { useActifsPrimairesList } from '../PageActifsPrimaires/AcrifsPromairesServices';
import { useActifsSupportList } from '../PageActifsSupport/ActifsSupportServices';
import { useDamagestList } from '../PageDamages/DamagesServices';
import { useAddRiskAnalysis } from '../PageRiskSheets/RiskSheetsServices';
import { useTriggerEventsList } from '../trigger event/TriggerEventServices';
import { DecisionStep } from './DecisionStep';
import { MesserRiskLevelStep } from './MesserRiskLevelStep';
import { MinimiseRiskLevelStep } from './MinimiseRiskLevelStep';
import { RiskDescriptionStep } from './RiskDescriptionStep';
import { useDecision, useMeasureLevels } from './decision.service';

export default function PageRiskAnalysis() {
  const toastValues = useToast();
  const navigate = useNavigate();

  const { mutate: createRiskAnalysis } = useAddRiskAnalysis({
    onSuccess: () => {
      navigate('/riskSheets');
    },
  });
  const { data, isLoading: isActifsPremairesLoading } =
    useActifsPrimairesList();
  const { data: decision, isLoading: isDecisionLoading } = useDecision();

  const { data: measures, isLoading: isMeasuresLoading } = useMeasureLevels();
  const measureLevelsOptions = measures?.map((measure) => ({
    value: measure.id,
    label: measure.level,
  }));
  const { data: actifsSupport, isLoading: isActifsSupportLoading } =
    useActifsSupportList();
  console.log('ActifsSupport', actifsSupport);
  const { data: damages, isLoading: isDamagesLoading } = useDamagestList();
  const { data: triggerEvents, isLoading: isTriggerEventsLoading } =
    useTriggerEventsList();

  const optionActifsPrimaires = data?.map((actif) => ({
    value: actif.id,
    label: actif.description,
  }));
  const actifsSupportOptions = actifsSupport?.map((actif) => ({
    value: actif.id,
    label: actif.name,
  }));

  const damagesOptions = damages?.map((damage) => ({
    value: damage.id,
    label: damage.name,
  }));

  const triggerEventsOptions = triggerEvents?.data?.map((event) => ({
    value: event.id,
    label: event.event,
  }));

  const form = useForm({
    onValidSubmit: (values) => {
      values.measures = (values.measures || [])?.filter(
        (measure: any) => !!measure?.measure && !!measure?.measure_level_id
      );

      createRiskAnalysis(values);

      toastValues({
        title: JSON.stringify(values, null, 2),
      });
    },
  });
  const isLoading =
    isDecisionLoading ||
    isActifsPremairesLoading ||
    isTriggerEventsLoading ||
    isActifsSupportLoading ||
    isDamagesLoading;

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
                actifsSupportOptions={actifsSupportOptions || []}
                optionActifsPrimaires={optionActifsPrimaires || []}
                damagesOptions={damagesOptions || []}
                triggerEventsOptions={triggerEventsOptions || []}
              />
              <MinimiseRiskLevelStep
                measureLevelsOptions={measureLevelsOptions}
              />
              <MesserRiskLevelStep
                measureLevelsOptions={measureLevelsOptions}
              />
              <DecisionStep decision={decision} />
            </MultiStepsLayout>
          </Formiz>
        )}
      </Box>
    </Center>
  );
}
