'use client';

import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Button } from '@xipkg/button';
import Image from 'next/image';

const Images = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));

  const size = isDesktop ? 512 : 256;

  return (
    <Stack
      direction={'column'}
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        position: 'absolute',
        right: '160px',
        top: isDesktop ? '-558px' : '-226px',
        width: `${size}px`,
        height: '1536px',
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          bgcolor: 'var(--xi-gray-10)',
        }}
      />
      <Image alt="student" src="/assets/student-main.svg" width={size} height={size} />
      <Box
        sx={{
          width: `${size}px`,
          height: `${size}px`,
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
  const isImages = useMediaQuery('(min-width:1350px)');

  const getMainPadding = () => {
    if (isDesktop) return '64px 160px 64px 160px';
    if (isTablet) return '32px';
    return '16px';
  };

  const getTextSize = () => {
    if (isDesktop) return '64px';
    if (isTablet) return '40px';
    return '32px';
  };

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: '100%', height: '100%', p: getMainPadding(), position: 'relative' }}
    >
      {isImages && <Images />}
      <Typography
        component="h1"
        sx={{
          mt: 0,
          color: 'var(--xi-gray-100)',
          fontSize: getTextSize(),
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
            fontSize: getTextSize(),
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
      <Stack sx={{ width: '100%', mt: '64px' }} direction={isTablet ? 'row' : 'column'} spacing={4}>
        <Button sx={{ p: isTablet ? '12px 32px' : '12px 24px' }} href="mailto:xieffect@yandex.ru">
          Записаться на демонстрацию
        </Button>
        <Button
          sx={{ p: isTablet ? '12px 32px' : '12px 24px' }}
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
