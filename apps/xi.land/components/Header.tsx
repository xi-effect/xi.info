'use client';

import { Link, Stack, SvgIcon, useMediaQuery, useTheme } from '@mui/material';
import { Button } from '@xipkg/button';
import Image from 'next/image';

const BurgerIcon = () => (
  <SvgIcon
    sx={{ fontSize: 32 }}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="5.33331" y="8" width="21.3333" height="2.66667" rx="0.5" fill="#101010" />
    <rect x="5.33331" y="14.667" width="21.3333" height="2.66667" rx="0.5" fill="#101010" />
    <rect x="5.33331" y="21.333" width="21.3333" height="2.66667" rx="0.5" fill="#101010" />
  </SvgIcon>
);

const arrayOfLinks = [
  {
    label: 'Продукт',
  },
  {
    label: 'Тарифы',
  },
  {
    label: 'Блог',
  },
  {
    label: 'Роадмап',
  },
];

const Header = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));
  // const isDesktopLinks = useMediaQuery(theme.breakpoints.up('lg'));

  const getMainPadding = () => {
    if (isDesktop) return '64px 160px 64px 160px';
    if (isTablet) return '32px';
    return '16px';
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: '100%', p: getMainPadding() }}
    >
      <Stack>
        <Image alt="xieffect logo" src="/xieffectlogo.svg" height={24} width={202} />
      </Stack>
      {isTablet && (
        <Stack sx={{ width: '100%', maxWidth: '398px', p: '0 6px' }} direction="row" justifyContent="space-between">
          {arrayOfLinks.map((item, index) => (
            <Link
              key={index}
              underline="hover"
              sx={{
                color: 'var(--xi-gray-60)',
                fontSize: '20px',
                fontWeight: 400,
                cursor: 'pointer',
              }}
            >
              {item.label}
            </Link>
          ))}
        </Stack>
      )}
      <Stack>
        {isTablet ? (
          <Button id="to-signin-button" data-umami-event="to-signin-button" sx={{ width: '96px', zIndex: 10 }} href="https://app.xieffect.ru/">
            Войти
          </Button>
        ) : (
          <Button variant="text" sx={{ width: '48px', height: '48px', zIndex: 10, p: 0, m: 0 }}>
            <BurgerIcon />
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default Header;
