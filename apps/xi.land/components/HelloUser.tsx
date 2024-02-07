// 'use client';

// import { Button } from '@xipkg/button';
// import Image from 'next/image';

// const Images = () => {
//   const theme = useTheme();
//   const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));

//   const size = isDesktop ? 512 : 256;

//   return (
//     <div
//       className={`flex flex-col justify-start items-start absolute right-[160px] top-[${
//         isDesktop ? '-558px' : '-226px'
//       }] h-[1536px] w-[${size}px] z-1`}
//     >
//       <div className={`w-[${size}px] h-[${size}px] rounded-[50%] bg-gray-10`} />
//       <Image alt="student" src="/assets/student-main.svg" width={size} height={size} />
//       <div className={`w-[${size}px] h-[${size}px] rounded-[50%] bg-gray-10`} />
//     </div>
//   );
// };

// const HelloUser = () => {
//   const theme = useTheme();
//   const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));
//   const isTablet = useMediaQuery(theme.breakpoints.up('md'));
//   const isImages = useMediaQuery('(min-width:1350px)');

//   const getMainPadding = () => {
//     if (isDesktop) return '64px 160px 64px 160px';
//     if (isTablet) return '32px';
//     return '16px';
//   };

//   const getTextSize = () => {
//     if (isDesktop) return '64px';
//     if (isTablet) return '40px';
//     return '32px';
//   };

//   return (
//     <div className="flex flex-col w-full justify-start items-start p-4 sm:p-8 3xl:py-16 3xl:px-[160px] relative">
//       {isImages && <Images />}
//       <h1
//         component="h1"
//         sx={{
//           mt: 0,
//           color: 'var(--xi-gray-100)',
//           fontSize: getTextSize(),
//           fontWeight: 700,
//           lineHeight: '130%' /* 124.8px */,
//           letterSpacing: '-0.96px',
//         }}
//       >
//         {`Гибкий\nобразовательный`}
//         <br />
//         {`инструмент`}
//         <span
//           sx={{
//             color: 'var(--xi-gray-50)',
//             fontSize: getTextSize(),
//             fontWeight: 500,
//             lineHeight: '130%' /* 124.8px */,
//             letterSpacing: '-0.96px',
//           }}
//         >
//           {`для репетиторов\nи малого`}
//           <br />
//           {`бизнеса`}
//         </span>
//       </h1>
//       <div sx={{ width: '100%', mt: '64px' }} direction={isTablet ? 'row' : 'column'} spacing={4}>
//         <Button sx={{ p: isTablet ? '12px 32px' : '12px 24px' }} href="mailto:xieffect@yandex.ru">
//           Записаться на демонстрацию
//         </Button>
//         <Button
//           sx={{ p: isTablet ? '12px 32px' : '12px 24px' }}
//           href="https://app.xieffect.ru/signup"
//           variant="outlined"
//         >
//           Стать пользователем
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default HelloUser;
