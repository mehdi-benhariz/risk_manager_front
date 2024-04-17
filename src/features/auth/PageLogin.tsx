import React from 'react';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Logo } from '@/components/Logo';
import { SlideIn } from '@/components/SlideIn';
import { LoginForm } from '@/features/auth/LoginForm';

export default function PageLogin() {
  const { t } = useTranslation(['auth']);

  return (
    <SlideIn>
      <Box px="2" py="4rem" w="22rem" maxW="full" m="auto">
        <Logo h="10rem" mb="8" mx="auto" />
        <Card>
          <CardHeader pb={0}>
            <Heading size="md" data-test="login-page-heading">
              {t('auth:login.title')}
            </Heading>
          </CardHeader>
          <CardBody>
            <LoginForm />
          </CardBody>
        </Card>
      </Box>
    </SlideIn>
  );
}
