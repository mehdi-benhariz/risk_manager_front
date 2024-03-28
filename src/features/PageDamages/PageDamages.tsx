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

import { useDamagestList } from './DamagesServices';

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

export default function PageDamagest() {
  const damages = useDamagestList();
  return (
    <Page containerSize="xl">
      <PageContent>
        <Heading size="md" mb="4">
          Dommages
        </Heading>
        <Text color="gray.600">
          Rappel Ces dommages sont subis par des actifs secondaires (ou
          supports) qui peuvent être : Des éléments matériels : équipement
          fonctionnel, câblage, dispositifs de sécurité, etc. des médias support
          de logiciel, d'automatisme, de paramètres de processus ou de données.
          Des éléments immatériels : logiciel, automatisme, paramétrage de
          processus, etc. ou des données (fichiers constitués, données
          fugitives, messages, échanges audiovisuels, etc.) Des procédures de
          management
        </Text>
        <DataList>
          <DataListHeader isVisible={{ base: false, md: true }}>
            <DataListCell colName="impacte">
              Critère de sécurité impacté
            </DataListCell>
            <DataListCell colName="type">Type de conséquence</DataListCell>
            <DataListCell colName="name" isVisible={{ base: false, md: true }}>
              Nom
            </DataListCell>
            <DataListCell colName="type" isVisible={{ base: false, md: true }}>
              Type de dommage
            </DataListCell>
            <DataListCell colName="comment" colWidth={2}>
              Commentaires{' '}
            </DataListCell>
            <DataListCell colName="select" colWidth="10rem">
              Sélection{' '}
            </DataListCell>
          </DataListHeader>

          {damages.isLoading && <DataListLoadingState />}
          {damages.isError && (
            <DataListErrorState
              title="Il y a eu une erreur lors du chargement des damages primaires."
              retry={() => damages.refetch()}
            />
          )}
          {damages.isSuccess && !damages.data.length && <DataListEmptyState />}

          {damages?.data?.map((damage) => (
            <DataListRow as={LinkBox} key={damage.id}>
              <DataListCell colName="impacte">
                {damage.security_impact}
              </DataListCell>
              <DataListCell colName="type" colWidth="4rem">
                {damage.consequence_type}
              </DataListCell>
              <DataListCell
                colName="name"
                isVisible={{ base: false, md: true }}
              >
                {damage.name}
              </DataListCell>
              <DataListCell
                colName="type"
                isVisible={{ base: false, md: true }}
              >
                {damage.consequence_type}
              </DataListCell>
              <DataListCell colName="comment">{damage.comment} </DataListCell>
              <DataListCell colName="select" alignItems="center" gap="2">
                {' '}
                <Switch
                  colorScheme="blue"
                  defaultChecked={damage.selection}
                  isDisabled
                />
                <Badge colorScheme={!!damage.selection ? 'blue' : 'gray'}>
                  {damage.selection ? 'Sélectionné' : 'Non sélectionné'}
                </Badge>{' '}
              </DataListCell>
            </DataListRow>
          ))}
        </DataList>
      </PageContent>
    </Page>
  );
}
