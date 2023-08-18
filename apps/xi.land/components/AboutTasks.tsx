'use client';

import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const AboutTasks = () => {
  const [menuItem, setMenuItem] = React.useState(0);

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: '100%', p: '160px 160px 64px 160px', bgcolor: 'var(--xi-gray-0)', zIndex: 10 }}
    >
      <Stack>
        <Image alt="xieffect logo" src="/assets/TasksIcons.svg" height={64} width={188} />
      </Stack>
      <Typography
        sx={{
          mt: '16px',
          color: 'var(--xi-gray-70)',
          fontSize: '64px',
          fontWeight: 500,
          lineHeight: '130%' /* 124.8px */,
          letterSpacing: '-0.96px',
        }}
      >
        Конечно, у нас есть задания и тесты.
      </Typography>
      <Typography
        sx={{
          mt: '16px',
          color: 'var(--xi-gray-70)',
          fontSize: '40px',
          fontWeight: 400,
          lineHeight: '130%' /* 124.8px */,
          letterSpacing: '-0.96px',
        }}
      >
        Создавайте задания и проверяйте ответы студентов, загруженные в виде
        <br />
        файлов или созданные во встроенном редакторе.
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
          src="/assets/TasksImage.svg"
          height={900}
          width={1600}
          priority={false}
        />
      </Stack>
    </Stack>
  );
};

export default AboutTasks;
