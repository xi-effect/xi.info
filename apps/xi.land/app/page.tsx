import { Stack, useMediaQuery, useTheme } from '@mui/material';
import AboutTasks from 'components/AboutTasks';
import Header from 'components/Header';
import HelloUser from 'components/HelloUser';
import React from 'react';

export default function MainPage() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      sx={{
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        overflowX: 'hidden',
        bgcolor: 'var(--xi-gray-0)',
      }}
    >
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ maxWidth: '1920px', width: '100%' }}
      >
        <Header />
        <HelloUser />
        <AboutTasks />
      </Stack>
    </Stack>
  );
}
