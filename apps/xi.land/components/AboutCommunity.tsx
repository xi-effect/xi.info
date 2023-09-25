'use client';

import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const AboutCommunity = () => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));

  const getMainPadding = () => {
    if (isDesktop) return '160px 160px 80px 160px';
    if (isTablet) return '32px';
    return '32px 16px';
  };

  const getMainTextFS = () => {
    if (isDesktop) return '64px';
    if (isTablet) return '32px';
    return '24px';
  };

  const getImageSize = () => {
    if (isDesktop) return 944;
    if (isTablet) return 502;
    return 302;
  };

  const getImagePadding = () => {
    if (isDesktop) return '64px';
    if (isTablet) return '34px';
    return '24px';
  };

  const getMainStackGap = () => {
    if (isDesktop) return '48px';
    if (isTablet) return '64px';
    return '32px';
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={getMainStackGap()}
      sx={{ width: '100%', p: getMainPadding(), bgcolor: 'var(--xi-gray-0)', zIndex: 10 }}
    >
      <Typography
        sx={{
          color: 'var(--xi-gray-70)',
          fontSize: getMainTextFS(),
          fontWeight: 500,
          lineHeight: '130%' /* 124.8px */,
          letterSpacing: '-0.64px',
          '& span': {
            color: 'var(--xi-brand-80)',
          },
        }}
      >
        А главное — <span>сообщество</span>
      </Typography>

      <Image
        style={{
          padding: getImagePadding(),
        }}
        alt="xieffect logo"
        src="/assets/Innner.svg"
        height={getImageSize()}
        width={getImageSize()}
        priority={false}
      />
    </Stack>
  );
};

export default AboutCommunity;
