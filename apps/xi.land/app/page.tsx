import { Stack } from '@mui/material';
import Header from 'components/Header';
import HelloUser from 'components/HelloUser';
import React from 'react';

export default function MainPage() {
  return (
    <Stack
      sx={{
        width: '100vw',
        height: '100%',
        minHeight: '100vh',
        bgcolor: 'gray.0',
      }}
    >
      <Header />
      <HelloUser />
    </Stack>
  ); 
}
