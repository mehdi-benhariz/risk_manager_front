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
import { use } from 'chai';
import { useTranslation } from 'react-i18next';

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

import { useActifsSupportList } from './ActifsSupportServices';

const ImpactLevel = ({ level }: { level: string }) => {
  return (
    <HStack>
      {['D', 'I', 'C', 'E'].map((l) => (
        <Stack key={l}>
          <Badge color={level === l ? 'blue' : 'gray'}>{l}</Badge>
          <Checkbox defaultChecked={level === l} isDisabled></Checkbox>
        </Stack>
      ))}
    </HStack>
  );
};

export default function PageActifsSupport() {
  const actifsSupport = useActifsSupportList();
  return (
    <Page containerSize="lg">
      <PageContent>
        <Heading size="md" mb="4">
          Actifs Support
        </Heading>

        <DataList>
          <DataListHeader isVisible={{ base: false, md: true }}>
            <DataListCell colName="element">Element</DataListCell>
            <DataListCell colName="name">Nom</DataListCell>
            <DataListCell colName="actType">
              Types d'actifs support
            </DataListCell>
            <DataListCell colName="isSelected" colWidth="10rem">
              Sélection{' '}
            </DataListCell>
          </DataListHeader>

          {actifsSupport.isLoading && <DataListLoadingState />}
          {actifsSupport.isError && (
            <DataListErrorState
              title="Il y a eu une erreur lors du chargement des actifs primaires."
              retry={() => actifsSupport.refetch()}
            />
          )}
          {actifsSupport.isSuccess && !actifsSupport.data.length && (
            <DataListEmptyState />
          )}

          {actifsSupport?.data?.map((actif) => (
            <DataListRow as={LinkBox} key={actif.id}>
              <DataListCell colName="element">{actif.element}</DataListCell>

              <DataListCell colName="name" colWidth="auto">
                {actif?.name}
              </DataListCell>
              <DataListCell colName="actType">
                <Text>{actif?.actif_type}</Text>
              </DataListCell>
              <DataListCell colName="isSelected" alignItems="center" gap="2">
                <Switch
                  colorScheme="blue"
                  defaultChecked={actif.isSelected}
                  isDisabled
                />
                <Badge colorScheme={!!actif.isSelected ? 'blue' : 'gray'}>
                  {actif.isSelected ? 'Sélectionné' : 'Non sélectionné'}
                </Badge>
              </DataListCell>
            </DataListRow>
          ))}
        </DataList>
      </PageContent>
    </Page>
  );
}
