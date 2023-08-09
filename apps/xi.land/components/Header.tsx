import { Button, Stack } from '@mui/material';
import Image from 'next/image';

const Header = () => {
  console.log('Header');

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: '100%', height: '24px', p: '64px 160px 64px 160px' }}
    >
      <Stack>
        <Image alt="xieffect logo" src="./xieffectlogo.svg" height={24} width={202} />
      </Stack>
      <Stack>2</Stack>
      <Stack>
        <Button href="https://app.xieffect.ru/">Войти</Button>
      </Stack>
    </Stack>
  );
};

export default Header;
