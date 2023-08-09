import { Stack, Typography } from '@mui/material';

const HelloUser = () => {
  console.log('Header');

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: '100%', height: '100%', p: '48px 160px 48px 160px' }}
    >
      <Typography
        sx={{
          color: 'var(--xi-gray-100)',
          fontSize: '96px',
          fontWeight: 700,
          lineHeight: '130%' /* 124.8px */,
          letterSpacing: '-0.96px',
        }}
      >
        {`Гибкий\nобразовательный\nинструмент`}
        <Typography
          sx={{
            color: 'var(--xi-gray-50)',
            fontSize: '96px',
            fontWeight: 500,
            lineHeight: '130%' /* 124.8px */,
            letterSpacing: '-0.96px',
          }}
        >
          {`для репетиторов\nи малого бизнеса`}
        </Typography>
      </Typography>
    </Stack>
  );
};

export default HelloUser;
