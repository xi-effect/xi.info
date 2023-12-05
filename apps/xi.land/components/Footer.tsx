'use client';

import { Box, Link, Stack } from '@mui/material';
import Image from 'next/image';

interface SectionLink {
  link: string;
  title: string;
}

interface Section {
  title: string;
  links: SectionLink[];
}

const sections: Section[] = [
  {
    title: 'Продукт',
    links: [
      { link: '#', title: 'Задания' },
      { link: '#', title: 'Тесты' },
      { link: '#', title: 'Видеоконференции' },
      { link: '#', title: 'Чаты' },
      { link: '#', title: 'Объявления' },
      { link: '#', title: 'Расписание' },
    ],
  },
  {
    title: 'Клиентам',
    links: [
      { link: '#', title: 'Тарифы' },
      { link: '#', title: 'Руководства' },
      { link: '#', title: 'Поддержка' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { link: '#', title: 'О нас' },
      { link: '#', title: 'Блог' },
      { link: '#', title: 'Документы' },
      { link: '#', title: 'Вакансии' },
    ],
  },
  {
    title: 'Социальные сети',
    links: [
      { link: 'https://vk.com/xieffect', title: 'VK' },
      { link: 'https://t.me/xieffect', title: 'Telegram' },
    ],
  },
];

const email = 'hello@xieffect.ru';

const Footer = () => {
  const renderSection = (section: Section) => (
    <Box sx={{ flexGrow: { lg: 1 }, fontSize: { xs: 16, md: 20 }, lineHeight: '130%' }}>
      <Box component={'h3'} sx={{ opacity: 0.4, m: 0, fontWeight: 400, fontSize: 'inherit' }}>
        {section.title}
      </Box>
      <Stack component={'ul'} direction={'column'} sx={{ p: 0, m: 0, mt: '24px', gap: '24px' }}>
        {section.links.map((link) => (
          <Stack sx={{ display: 'inline' }} component={'li'} key={link.title}>
            <Link underline="none" sx={{ color: 'inherit' }} href={link.link}>
              {link.title}
            </Link>
          </Stack>
        ))}
      </Stack>
    </Box>
  );

  return (
    <Stack
      component={'footer'}
      direction={{ xs: 'column', lg: 'row' }}
      sx={{
        width: '100%',
        gap: { lg: 'auto', xs: '32px' },
        padding: { xs: '32px 16px', md: '32px', xl: '64px 160px' },
        color: 'var(--xi-gray-100)',
      }}
    >
      <Stack>
        <Image alt="xieffect logo" src="/xieffectlogo.svg" height={24} width={202} />
      </Stack>
      <Stack flexGrow={1} direction={'column'}>
        <Stack
          direction={{ lg: 'row', xs: 'column' }}
          sx={{
            gap: '32px',
            maxHeight: '650px',
          }}
          flexWrap={'wrap'}
        >
          {sections.map(renderSection)}
        </Stack>
        <Stack
          sx={{
            width: { sm: '75%' },
            columnGap: '32px',
            rowGap: '8px',
            mt: { lg: '64px', xs: '32px' },
            fontSize: { xs: 12, md: 16 },
            color: 'var(--xi-gray-70)',
          }}
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={{ md: 'space-between' }}
        >
          <span>&copy; xieffect 2020 года</span>
          <Box sx={{ order: { xs: 1, md: 0 } }}>Сделано с ❤ в Санкт-Петербурге</Box>
          <span>
            <Link underline="none" sx={{ color: 'inherit' }} href={`mailto:${email}`}>
              {email}
            </Link>
          </span>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
