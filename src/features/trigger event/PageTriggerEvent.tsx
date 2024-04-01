import {
  Badge,
  Checkbox,
  HStack,
  Heading,
  LinkBox,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react';

import {
  DataList,
  DataListCell,
  DataListEmptyState,
  DataListErrorState,
  DataListHeader,
  DataListLoadingState,
  DataListRow,
} from '@/components/DataList';
import { Page, PageContent } from '@/components/Page';

import { useTriggerEventsList } from './TriggerEventServices';

export default function PageTriggerEvents() {
  const TriggerEvents = useTriggerEventsList();
  return (
    <Page containerSize="xl">
      <PageContent>
        <Heading size="md" mb="4">
          Événements déclencheurs
        </Heading>
        <Text color="gray.600">Typologie et exposition naturelle</Text>
        <DataList>
          <DataListHeader>
            <DataListCell colName="type">Type</DataListCell>
            <DataListCell colName="codeType" colWidth="4rem">
              Code type
            </DataListCell>
            <DataListCell colName="code">Code</DataListCell>
            <DataListCell colName="event">
              Exposition naturelle standard CLUSIF
            </DataListCell>
            <DataListCell colName="naturelle">
              Exposition naturelle décidée
            </DataListCell>

            <DataListCell colName="naturelleResultate">
              Exposition naturelle résultante
            </DataListCell>

            <DataListCell colName="comment" colWidth={4}>
              Commentaire{' '}
            </DataListCell>

            <DataListCell colName="isSelected">Sélection </DataListCell>
          </DataListHeader>

          {TriggerEvents.isLoading && <DataListLoadingState />}
          {TriggerEvents.isError && (
            <DataListErrorState
              title="Il y a eu une erreur lors du chargement des TriggerEvents primaires."
              retry={() => TriggerEvents.refetch()}
            />
          )}
          {TriggerEvents.isSuccess && !TriggerEvents.data.length && (
            <DataListEmptyState />
          )}

          {TriggerEvents?.data?.map((TriggerEvent) => (
            <DataListRow as={LinkBox} key={TriggerEvent.code}>
              <DataListCell colName="type">
                {TriggerEvent?.type || ''}
              </DataListCell>
              <DataListCell colName="codeType">
                <Badge>{TriggerEvent?.code_type || ''}</Badge>
              </DataListCell>
              <DataListCell colName="code">
                <Text color="gray.600" fontSize="md">
                  {TriggerEvent?.code || ''}
                </Text>
              </DataListCell>
              <DataListCell colName="event">
                <Text color="gray.600" fontSize="md">
                  {TriggerEvent?.standard_natural_exposure || ''}
                </Text>
              </DataListCell>
              <DataListCell colName="naturelle">
                {TriggerEvent?.decision_natural_exposure || ''}
              </DataListCell>
              <DataListCell colName="naturelleResultate">
                {TriggerEvent?.result_natural_exposure || ''}
              </DataListCell>
              <DataListCell colName="comment" colWidth="3">
                <Text color="gray.600" fontSize="sm">
                  {TriggerEvent?.comment || ''}
                </Text>
              </DataListCell>
              <DataListCell colName="isSelected" alignItems="center" gap="2">
                <Switch
                  colorScheme="blue"
                  defaultChecked={TriggerEvent.isSelected}
                  isDisabled
                />
                <Badge
                  colorScheme={!!TriggerEvent.isSelected ? 'blue' : 'gray'}
                >
                  {TriggerEvent.isSelected ? 'Sélectionné' : 'Non sélectionné'}
                </Badge>
              </DataListCell>
            </DataListRow>
          ))}
        </DataList>
      </PageContent>
    </Page>
  );
}
