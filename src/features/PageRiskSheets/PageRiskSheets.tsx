import {
  Badge,
  Button,
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

import { useRiskSheetsList } from './RiskSheetsServices';

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

export default function PageRiskSheets() {
  const riskSheets = useRiskSheetsList();
  return (
    <Page containerSize="xl">
      <PageContent>
        <Heading size="md" mb="4">
          Actifs Primaires
        </Heading>
        <DataList>
          <DataListHeader isVisible={{ base: false, md: true }}>
            <DataListCell colName="delete" colWidth="4rem"></DataListCell>
            <DataListCell colName="number">N° Fiche</DataListCell>
            <DataListCell colName="dic">DIC</DataListCell>
            <DataListCell colName="ActifSupport">Actif Support</DataListCell>
            <DataListCell colName="damegType">Type de dommage</DataListCell>
            <DataListCell colName="eventDeclancher">
              Événement déclencheur
            </DataListCell>
            <DataListCell colName="AdditionalCircumstances">
              Complément de circonstances
            </DataListCell>
            <DataListCell colName="gi">GI</DataListCell>
            <DataListCell colName="gr">GR</DataListCell>
            <DataListCell colName="decision">Décision prise</DataListCell>
            <DataListCell colName="comment" colWidth={3}>
              Commentaire
            </DataListCell>
          </DataListHeader>

          {riskSheets.isLoading && <DataListLoadingState />}
          {riskSheets.isError && (
            <DataListErrorState
              title="Il y a eu une erreur lors du chargement des actifs primaires."
              retry={() => riskSheets.refetch()}
            />
          )}
          {riskSheets.isSuccess && !riskSheets.data.length && (
            <DataListEmptyState />
          )}

          {riskSheets?.data?.map((riskSheet) => (
            <DataListRow as={LinkBox} key={riskSheet.id}>
              <DataListCell colName="delete">
                <Button onClick={() => {}}>🗑</Button>
              </DataListCell>
              <DataListCell colName="number">{riskSheet.id}</DataListCell>
              <DataListCell colName="dic">DIC</DataListCell>
              <DataListCell colName="ActifSupport">
                {riskSheet.primary_actif_id}
              </DataListCell>
              <DataListCell colName="damegType">Type de dommage</DataListCell>
              <DataListCell colName="eventDeclancher">
                {riskSheet.trigger_event_id}
              </DataListCell>
              <DataListCell colName="AdditionalCircumstances">
                {riskSheet.support_actif_id}
              </DataListCell>
              <DataListCell colName="gi">GI</DataListCell>
              <DataListCell colName="gr">GR</DataListCell>
              <DataListCell colName="decision">Décision prise</DataListCell>
              <DataListCell colName="comment">
                {' '}
                {riskSheet.comment}
              </DataListCell>
              {/* <ImpactLevel level={actif.impact_level} /> */}
            </DataListRow>
          ))}
        </DataList>
      </PageContent>
    </Page>
  );
}
