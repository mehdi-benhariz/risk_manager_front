import { Badge, Heading, LinkBox, Switch, Text } from '@chakra-ui/react';

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
            <DataListCell colName="name" colWidth="4rem">
              Nom
            </DataListCell>
            <DataListCell colName="actType">Types dactifs support</DataListCell>
            <DataListCell colName="selection" colWidth="10rem">
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

              <DataListCell colName="name">{actif?.name}</DataListCell>
              <DataListCell colName="actType">
                <Text>{actif?.type}</Text>
              </DataListCell>
              <DataListCell colName="selection" alignItems="center" gap="2">
                <Switch
                  colorScheme="blue"
                  defaultChecked={actif.selection}
                  isDisabled
                />
                <Badge colorScheme={!!actif.selection ? 'blue' : 'gray'}>
                  {actif.selection ? 'Sélectionné' : 'Non sélectionné'}
                </Badge>
              </DataListCell>
            </DataListRow>
          ))}
        </DataList>
      </PageContent>
    </Page>
  );
}
