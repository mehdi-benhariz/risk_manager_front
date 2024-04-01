import { FC, PropsWithChildren } from 'react';

import {
  Box,
  Button,
  Grid,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
} from '@chakra-ui/react';
import { useFormContext } from '@formiz/core';

import { Page, PageProps } from '../Page';

export const MultiStepsLayout: FC<
  PropsWithChildren<{ submitLabel: string }> & PageProps
> = ({ children, submitLabel = 'Submit', ...props }) => {
  const form = useFormContext();
  const hasSteps = !!form?.steps?.length;
  return (
    <Page {...props}>
      {hasSteps && (
        <Grid
          justifyItems="center"
          templateColumns="1fr 2fr 1fr"
          alignItems="center"
          gap={4}
          mt={4}
        >
          {!form.isFirstStep && (
            <Button gridColumn="1" w="5rem" onClick={form.goToPreviousStep}>
              Previous
            </Button>
          )}
          <Box
            gridColumn="2"
            textAlign="center"
            fontSize="sm"
            fontWeight="bold"
            color="gray.800"
          >
            <Stepper index={form.currentStep?.index ?? 0}>
              {form.steps?.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </Box>
          <Button
            type="submit"
            colorScheme={form.isLastStep ? '' : 'red'}
            w="5rem"
            gridColumn="3"
            isDisabled={
              (form.isLastStep ? !form.isValid : !form.isStepValid) &&
              form.isStepSubmitted
            }
          >
            {form.isLastStep ? submitLabel : 'Next'}
          </Button>
        </Grid>
      )}
      {children}
    </Page>
  );
};
