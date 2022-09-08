import Head from 'next/head';
import React from 'react';
import { Box } from '~/app/presentation/components';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Box>
      <Head>
        <title>Calenday</title>
      </Head>
      <Box>{children}</Box>
    </Box>
  );
}

export default DefaultLayout;
