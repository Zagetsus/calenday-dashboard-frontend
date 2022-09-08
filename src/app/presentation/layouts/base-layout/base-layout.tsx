import Head from 'next/head';
import React from 'react';
import { Box, CssBaseline, Toolbar } from '~/app/presentation/components';
import {
  AccountDrawerTag,
  HeaderTag
} from '~/app/presentation/layouts/components';
import makeStyles, { mainSx } from './base-layout-styles';

type BaseLayoutProps = {
  children: React.ReactNode;
};

function BaseLayout({ children }: BaseLayoutProps) {
  const classes = makeStyles();
  return (
    <Box>
      <Head>
        <title>Calenday</title>
      </Head>

      <CssBaseline />
      <HeaderTag />

      <AccountDrawerTag />

      <Box component='main' sx={mainSx}>
        <Toolbar className={classes.toolbar} />
        {children}
      </Box>
    </Box>
  );
}

export default BaseLayout;
