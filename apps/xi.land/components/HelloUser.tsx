import { Box, Stack, Typography } from '@mui/material';
import { Button } from '@xipkg/button';
import Image from 'next/image';

const Images = () => (
  <Stack
    direction="column"
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
      sx={{ width: '512px', height: '512px', borderRadius: '50%', bgcolor: 'var(--xi-gray-10)' }}
    />
    <Image alt="student" src="/assets/studentka.svg" width={512} height={512} />
    <Box
      sx={{ width: '512px', height: '512px', borderRadius: '50%', bgcolor: 'var(--xi-gray-10)' }}
    />
  </Stack>
);

const HelloUser = () => {
  console.log('Header');

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: '100%', height: '100%', p: '48px 160px 48px 160px', position: 'relative' }}
    >
      <Images />
      <Typography
        component="h1"
        sx={{
          color: 'var(--xi-gray-100)',
          fontSize: '64px',
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
            fontSize: '64px',
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
