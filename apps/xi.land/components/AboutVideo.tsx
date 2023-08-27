'use client';

import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const AboutVideo = () => {
  const [menuItem, setMenuItem] = React.useState(0);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));
  // const isDesktopLinks = useMediaQuery(theme.breakpoints.up('lg'));

  const getMainPadding = () => {
    if (isDesktop) return '160px 160px 80px 160px';
    if (isTablet) return '32px';
    return '32px 16px';
  };

  const getImageHeight = () => {
    if (isDesktop) return 64;
    if (isTablet) return 48;
    return 32;
  };

  const getMainTextFS = () => {
    if (isDesktop) return '64px';
    if (isTablet) return '32px';
    return '24px';
  };

  const getSecondaryTextFS = () => {
    if (isDesktop) return '40px';
    if (isTablet) return '20px';
    return '14px';
  };

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: '100%', p: getMainPadding(), bgcolor: 'var(--xi-gray-0)', zIndex: 10 }}
    >
      <Stack>
        <Image
          alt="xieffect logo"
          src="/assets/VideoIcon.svg"
          height={getImageHeight()}
          width={getImageHeight()}
        />
      </Stack>
      <Typography
        sx={{
          mt: '16px',
          color: 'var(--xi-gray-70)',
          fontSize: getMainTextFS(),
          fontWeight: 500,
          lineHeight: '130%' /* 124.8px */,
          letterSpacing: '-0.96px',
        }}
      >
        Нужно совершить видеозвонок?
      </Typography>
      <Typography
        sx={{
          mt: '16px',
          color: 'var(--xi-gray-70)',
          fontSize: getSecondaryTextFS(),
          fontWeight: 400,
          lineHeight: '130%' /* 124.8px */,
          letterSpacing: '-0.96px',
        }}
      >
        Начинайте видеоконференцию в удобное для вас время, приглашайте до 100 участников,
        демонстрируйте ваш экран, общайтесь в чате не выходя из браузера.
      </Typography>
      <Stack
        sx={{
          mt: '48px',
          width: '100%',
          height: '100%',
          maxHeight: '900px',
          maxWidth: '1600px',
          boxShadow: '0px 11.26760482788086px 45.07041931152344px 0px rgba(27, 27, 27, 0.08)',
          borderRadius: '24px',
        }}
      >
        <Image
          style={{
            width: '100%',
            height: 'auto',
          }}
          alt="xieffect logo"
          src="/assets/VideoImage.svg"
          height={900}
          width={1600}
          priority={false}
        />
      </Stack>
    </Stack>
  );
};

export default AboutVideo;
