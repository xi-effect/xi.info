'use client';

import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Button } from '@xipkg/button';
import Image from 'next/image';

const Images = () => {
  return (
    <Stack
      direction={'column'}
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        position: 'absolute',
        right: '160px',
        top: '-558px',
        width: '512px',
        height: '1536px',
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          width: `512px`,
          height: `512px`,
          borderRadius: '50%',
          bgcolor: 'var(--xi-gray-10)',
        }}
      />
      <Image alt="student" src="/assets/Studentka.svg" width={512} height={512} />
      <Box
        sx={{
          width: `512px`,
          height: `512px`,
          borderRadius: '50%',
          bgcolor: 'var(--xi-gray-10)',
        }}
      />
    </Stack>
  );
};

const HelloUser = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));

  const getH1PaddingTop = () => {
    if (isDesktop) return 0;
    if (isTablet) return 412;
    return 296;
  };

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: '100%', height: '100%', p: '48px 160px 96px 160px', position: 'relative' }}
    >
      {isDesktop && <Images />}
      <Typography
        component="h1"
        sx={{
          mt: `${getH1PaddingTop()}px`,
          color: 'var(--xi-gray-100)',
          fontSize: isDesktop ? '64px' : '40px',
          fontWeight: 700,
          lineHeight: '130%' /* 124.8px */,
          letterSpacing: '-0.96px',
        }}
      >
        {`Гибкий\nобразовательный`}
        <br />
        {`инструмент`}
        <Typography
          sx={{
            color: 'var(--xi-gray-50)',
            fontSize: isDesktop ? '64px' : '40px',
            fontWeight: 500,
            lineHeight: '130%' /* 124.8px */,
            letterSpacing: '-0.96px',
          }}
        >
          {`для репетиторов\nи малого`}
          <br />
          {`бизнеса`}
        </Typography>
      </Typography>
      <Stack sx={{ width: '100%', mt: '64px' }} direction="row" spacing={4}>
        <Button sx={{ p: '12px 32px 12px 32px' }} href="mailto:xieffect@yandex.ru">
          Записаться на демонстрацию
        </Button>
        <Button
          sx={{ p: '12px 32px 12px 32px' }}
          href="https://app.xieffect.ru/signup"
          variant="outlined"
        >
          Стать пользователем
        </Button>
      </Stack>
    </Stack>
  );
};

export default HelloUser;
