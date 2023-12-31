import { Stack } from '@mui/material';
import AboutAnnounce from 'components/AboutAnnounce';
import AboutChat from 'components/AboutChat';
import AboutCommunity from 'components/AboutCommunity';
import AboutTasks from 'components/AboutTasks';
import AboutVideo from 'components/AboutVideo';
import Footer from 'components/Footer';
import Header from 'components/Header';
import HelloUser from 'components/HelloUser';

export default function MainPage() {
  return (
    <Stack
      component="main"
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      sx={{
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        overflowX: 'hidden',
        bgcolor: 'var(--xi-gray-0)',
      }}
    >
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ maxWidth: '1920px', width: '100%' }}
      >
        <Header />
        <HelloUser />
        <AboutTasks />
        <AboutVideo />
        <AboutChat />
        <AboutAnnounce />
        <AboutCommunity />
        <Footer />
      </Stack>
    </Stack>
  );
}
