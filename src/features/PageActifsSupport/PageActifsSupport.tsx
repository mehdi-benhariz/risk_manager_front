import {
  Badge,
  Checkbox,
  HStack,
  Heading,
  LinkBox,
  Stack,
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
    <Page containerSize="xl">
      <PageContent>
        <Heading size="md" mb="4">
          Actifs Primaires
        </Heading>
        <Text color="gray.600">
          concernés par le dysfonctionnement décrit ci-dessous
        </Text>
        <DataList>
          <DataListHeader isVisible={{ base: false, md: true }}>
            <DataListCell colName="type">Type d'actifs</DataListCell>
            <DataListCell colName="code" colWidth="4rem">
              Code
            </DataListCell>
            <DataListCell
              colName="description"
              isVisible={{ base: false, md: true }}
            >
              Description des actifs
            </DataListCell>
            <DataListCell
              colName="complementary_description"
              isVisible={{ base: false, md: true }}
            >
              Complément de description
            </DataListCell>
            <DataListCell colName="niveauxdimpact">
              Niveaux d'impact
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
              <DataListCell colName="type" colWidth="auto">
                {actif?.actif_type || ''}
              </DataListCell>
              <DataListCell colName="code">
                <Badge>{actif?.code || ''}</Badge>
              </DataListCell>
              <DataListCell
                colName="description"
                isVisible={{ base: false, md: true }}
              >
                <Text color="gray.600" fontSize="md">
                  {actif?.description || ''}
                </Text>
              </DataListCell>
              <DataListCell
                colName="complementary_description"
                isVisible={{ base: false, md: true }}
              >
                <Text color="gray.600" fontSize="md">
                  {actif?.complementary_description || ''}
                </Text>
              </DataListCell>
              <DataListCell colName="niveauxdimpact">
                <ImpactLevel level={actif.impact_level} />
              </DataListCell>
            </DataListRow>
          ))}
        </DataList>
      </PageContent>
    </Page>
  );
}
