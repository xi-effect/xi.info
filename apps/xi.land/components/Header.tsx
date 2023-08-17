import { Link, Stack } from '@mui/material';
import { Button } from '@xipkg/button';
import Image from 'next/image';

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
  console.log('Header');

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: '100%', height: '176px', p: '64px 160px 64px 160px' }}
    >
      <Stack>
        <Image alt="xieffect logo" src="./xieffectlogo.svg" height={24} width={202} />
      </Stack>
      <Stack direction="row" spacing={4}>
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
      <Stack>
        <Button sx={{ width: '96px', zIndex: 10 }} href="https://app.xieffect.ru/">
          Войти
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;
