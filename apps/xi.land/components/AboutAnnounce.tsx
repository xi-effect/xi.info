// 'use client';

// import Image from 'next/image';
// import React from 'react';

// const AboutAnnounce = () => {
//   const [menuItem, setMenuItem] = React.useState(0);
//   const theme = useTheme();
//   const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));
//   const isTablet = useMediaQuery(theme.breakpoints.up('md'));

//   const getMainPadding = () => {
//     if (isDesktop) return '160px 160px 80px 160px';
//     if (isTablet) return '32px';
//     return '32px 16px';
//   };

//   const getImageHeight = () => {
//     if (isDesktop) return 64;
//     if (isTablet) return 48;
//     return 32;
//   };

//   const getImageWidth = () => {
//     if (isDesktop) return 188;
//     if (isTablet) return 144;
//     return 91;
//   };

//   const getMainTextFS = () => {
//     if (isDesktop) return '64px';
//     if (isTablet) return '32px';
//     return '24px';
//   };

//   const getSecondaryTextFS = () => {
//     if (isDesktop) return '40px';
//     if (isTablet) return '20px';
//     return '14px';
//   };

//   return (
//     <div
//       className="flex flex-col w-full justify-start items-start z-10 bg-gray-0"
//       sx={{ p: getMainPadding() }}
//     >
//       <div>
//         <Image
//           alt="xieffect logo"
//           src="/assets/AnnounceIcon.svg"
//           height={getImageHeight()}
//           width={getImageWidth()}
//         />
//       </div>
//       <Typography
//         sx={{
//           mt: '16px',
//           color: 'var(--xi-gray-70)',
//           fontSize: getMainTextFS(),
//           fontWeight: 500,
//           lineHeight: '130%' /* 124.8px */,
//           letterSpacing: '-0.96px',
//         }}
//       >
//         А кроме того объявления и расписание. Все в одном месте.
//       </Typography>
//       <Typography
//         sx={{
//           mt: '16px',
//           color: 'var(--xi-gray-70)',
//           fontSize: getSecondaryTextFS(),
//           fontWeight: 400,
//           lineHeight: '130%' /* 124.8px */,
//           letterSpacing: '-0.96px',
//         }}
//       >
//         Создавайте объявления о важных событиях и датах внутри сообществ или используйте как блог.
//       </Typography>
//       <div
//         sx={{
//           mt: '48px',
//           width: '100%',
//           height: '100%',
//           maxHeight: '900px',
//           maxWidth: '1600px',
//           boxShadow: '0px 11.26760482788086px 45.07041931152344px 0px rgba(27, 27, 27, 0.08)',
//           borderRadius: '24px',
//         }}
//       >
//         <Image
//           style={{
//             width: '100%',
//             height: 'auto',
//           }}
//           alt="xieffect logo"
//           src="/assets/AnnounceImage.svg"
//           height={900}
//           width={1600}
//           priority={false}
//         />
//       </div>
//     </div>
//   );
// };

// export default AboutAnnounce;
