import { FC, useState } from 'react';

import {
  Badge,
  Checkbox,
  HStack,
  Heading,
  LinkBox,
  Menu,
  MenuButton,
  MenuList,
  Stack,
} from '@chakra-ui/react';
import { LuPlus, LuTrash2 } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import { ActionsButton } from '@/components/ActionsButton';
import { ConfirmMenuItem } from '@/components/ConfirmMenuItem';
import {
  DataList,
  DataListCell,
  DataListEmptyState,
  DataListErrorState,
  DataListHeader,
  DataListLoadingState,
  DataListRow,
} from '@/components/DataList';
import { Icon } from '@/components/Icons';
import { Page, PageContent } from '@/components/Page';
import { ResponsiveIconButton } from '@/components/ResponsiveIconButton';
import { SearchInput } from '@/components/SearchInput';

import { RiskSheetsType, useRiskSheetsList } from './RiskSheetsServices';

const ImpactLevel = ({ level }: { level: string }) => {
  const levels = ['D', 'I', 'C', 'E'];
  return (
    <HStack>
      {levels.map((l) => (
        <Stack key={l}>
          <Badge color={(level ?? '') === l ? 'blue' : 'gray'}>{l}</Badge>
          <Checkbox defaultChecked={(level ?? '') === l} isDisabled></Checkbox>
        </Stack>
      ))}
    </HStack>
  );
};

type DeleteRiskSheetProps = {
  riskSheetId: number;
};
const DeleteRiskSheet: FC<DeleteRiskSheetProps> = (props) => {
  return (
    <Menu isLazy placement="right-start">
      <MenuButton as={ActionsButton} />
      <MenuList>
        <ConfirmMenuItem
          icon={<Icon icon={LuTrash2} fontSize="lg" color="gray.400" />}
          onClick={() => {
            console.log('deleted');
          }}
        >
          Delete
        </ConfirmMenuItem>
      </MenuList>
    </Menu>
  );
};
export default function PageRiskSheets() {
  const [xField, setXField] = useState<string | undefined>('');
  const { data, isLoading, refetch, isError, isSuccess } = useRiskSheetsList({
    xField,
  });

  return (
    <Page containerSize="xl">
      <PageContent>
        <Heading size="md" mb="4">
          Actifs Primaires
        </Heading>
        <Stack>
          <HStack>
            <SearchInput value={xField} onChange={setXField} />
            <ResponsiveIconButton
              icon={<LuPlus />}
              as={Link}
              to="/riskAnalysis"
            >
              add new risk
            </ResponsiveIconButton>
          </HStack>
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

            {isLoading && <DataListLoadingState />}
            {isError && (
              <DataListErrorState
                title="Il y a eu une erreur lors du chargement des actifs primaires."
                retry={() => refetch()}
              />
            )}
            {isSuccess && !data?.data.length && <DataListEmptyState />}

            {(!data?.data.length ? [] : data?.data).map(
              (riskSheet: RiskSheetsType) => (
                <DataListRow as={LinkBox} key={riskSheet?.id}>
                  <DataListCell colName="delete">
                    <DeleteRiskSheet riskSheetId={riskSheet?.id} />
                  </DataListCell>
                  <DataListCell colName="number">{riskSheet?.id}</DataListCell>
                  <DataListCell colName="dic">
                    <ImpactLevel level={riskSheet?.consequence_type || ''} />
                  </DataListCell>
                  <DataListCell colName="ActifSupport">
                    {riskSheet?.primary_actif?.description}
                  </DataListCell>
                  <DataListCell colName="damegType">
                    {riskSheet?.damage?.damage_type}
                  </DataListCell>
                  <DataListCell colName="eventDeclancher">
                    {riskSheet?.trigger_event?.code_type}
                  </DataListCell>
                  <DataListCell colName="AdditionalCircumstances">
                    {riskSheet?.support_actif?.name}
                  </DataListCell>
                  <DataListCell colName="gi">
                    {riskSheet?.intrinsic_gravity || ''}
                  </DataListCell>
                  <DataListCell colName="gr">
                    {riskSheet?.residual_gravity || ''}
                  </DataListCell>
                  <DataListCell colName="decision">
                    {riskSheet?.decision?.decision_result}
                  </DataListCell>
                  <DataListCell colName="comment">
                    {riskSheet?.comment}
                  </DataListCell>
                  {/* <ImpactLevel level={actif.impact_level} /> */}
                </DataListRow>
              )
            )}
          </DataList>
        </Stack>
      </PageContent>
    </Page>
  );
}
