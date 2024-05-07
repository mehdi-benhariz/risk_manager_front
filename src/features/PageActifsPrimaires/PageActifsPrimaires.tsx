import {
  Badge,
  Checkbox,
  HStack,
  Heading,
  LinkBox,
  Stack,
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

import { useActifsPrimairesList } from './AcrifsPromairesServices';

export const ImpactLevel = ({ level }: { level: number }) => {
  const levels = ['D', 'I', 'C', 'E'];
  return (
    <HStack>
      {levels.map((l) => (
        <Stack key={l}>
          <Badge color={(levels[level - 1] ?? '') === l ? 'blue' : 'gray'}>
            {l}
          </Badge>
          <Checkbox
            defaultChecked={(levels[level - 1] ?? '') === l}
            isDisabled
          ></Checkbox>
        </Stack>
      ))}
    </HStack>
  );
};

export default function PageActifsPrimaires() {
  const actifsPrimaires = useActifsPrimairesList();
  const { data } = actifsPrimaires;
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
            <DataListCell colName="type">Type d&apos;actifs</DataListCell>
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
              colWidth={2}
            >
              Complément de description
            </DataListCell>
            <DataListCell
              colName="niveauxdimpact"
              alignItems="center"
              colWidth="7.5rem"
            >
              Niveaux d&apos;impact
            </DataListCell>
          </DataListHeader>

          {actifsPrimaires.isLoading && <DataListLoadingState />}
          {actifsPrimaires.isError && (
            <DataListErrorState
              title="Il y a eu une erreur lors du chargement des actifs primaires."
              retry={() => actifsPrimaires.refetch()}
            />
          )}
          {actifsPrimaires.isSuccess && !actifsPrimaires.data.length && (
            <DataListEmptyState />
          )}

          {actifsPrimaires?.data?.map &&
            actifsPrimaires?.data?.map((actif) => (
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
                <DataListCell colName="niveauxdimpact" alignItems="center">
                  <ImpactLevel level={+actif.impact_level} />
                </DataListCell>
              </DataListRow>
            ))}
        </DataList>
      </PageContent>
    </Page>
  );
}
