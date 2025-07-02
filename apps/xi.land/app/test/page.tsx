'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Button } from '@xipkg/button';
import { AfineAnimation } from './AfineAnimation';
import { GeometryAnimation } from './GeometryAnimation';

const CircleSvgTop = ({ className }: { className: string }) => (
  <svg
    className={className}
    width="1003"
    height="800"
    viewBox="0 0 1003 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.5" filter="url(#filter0_fn_6178_6480)">
      <circle cx="235" cy="83" r="256" fill="white" />
    </g>
    <defs>
      <filter
        id="filter0_fn_6178_6480"
        x="-533"
        y="-685"
        width="1536"
        height="1536"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="256" result="effect1_foregroundBlur_6178_6480" />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1 1"
          stitchTiles="stitch"
          numOctaves="3"
          result="noise"
          seed="7490"
        />
        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
          <feFuncA
            type="discrete"
            tableValues="0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
          />
        </feComponentTransfer>
        <feComposite
          operator="in"
          in2="effect1_foregroundBlur_6178_6480"
          in="coloredNoise1"
          result="noise1Clipped"
        />
        <feComponentTransfer in="alphaNoise" result="coloredNoise2">
          <feFuncA
            type="discrete"
            tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 "
          />
        </feComponentTransfer>
        <feComposite
          operator="in"
          in2="effect1_foregroundBlur_6178_6480"
          in="coloredNoise2"
          result="noise2Clipped"
        />
        <feFlood floodColor="#0F0F11" result="color1Flood" />
        <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
        <feFlood floodColor="rgba(255, 255, 255, 0.25)" result="color2Flood" />
        <feComposite operator="in" in2="noise2Clipped" in="color2Flood" result="color2" />
        <feMerge result="effect2_noise_6178_6480">
          <feMergeNode in="effect1_foregroundBlur_6178_6480" />
          <feMergeNode in="color1" />
          <feMergeNode in="color2" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

const CircleSvgBottom = ({ className }: { className: string }) => (
  <svg
    className={className}
    width="958"
    height="800"
    viewBox="0 0 958 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.5" filter="url(#filter0_fn_6178_6481)">
      <circle cx="768" cy="610" r="256" fill="#F3F4FC" />
    </g>
    <defs>
      <filter
        id="filter0_fn_6178_6481"
        x="0"
        y="-158"
        width="1536"
        height="1536"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="256" result="effect1_foregroundBlur_6178_6481" />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1 1"
          stitchTiles="stitch"
          numOctaves="3"
          result="noise"
          seed="7490"
        />
        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
          <feFuncA
            type="discrete"
            tableValues="0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
          />
        </feComponentTransfer>
        <feComposite
          operator="in"
          in2="effect1_foregroundBlur_6178_6481"
          in="coloredNoise1"
          result="noise1Clipped"
        />
        <feComponentTransfer in="alphaNoise" result="coloredNoise2">
          <feFuncA
            type="discrete"
            tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 "
          />
        </feComponentTransfer>
        <feComposite
          operator="in"
          in2="effect1_foregroundBlur_6178_6481"
          in="coloredNoise2"
          result="noise2Clipped"
        />
        <feFlood floodColor="#0F0F11" result="color1Flood" />
        <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
        <feFlood floodColor="rgba(255, 255, 255, 0.25)" result="color2Flood" />
        <feComposite operator="in" in2="noise2Clipped" in="color2Flood" result="color2" />
        <feMerge result="effect2_noise_6178_6481">
          <feMergeNode in="effect1_foregroundBlur_6178_6481" />
          <feMergeNode in="color1" />
          <feMergeNode in="color2" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

export default function ProductPage() {
  const [isHovered, setIsHovered] = useState(false);
  const geometryRef = useRef<HTMLDivElement>(null);
  const afineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Начальное состояние - элементы скрыты
    gsap.set([geometryRef.current, afineRef.current], {
      opacity: 0,
      scale: 0.8,
    });
  }, []);

  useLayoutEffect(() => {
    if (isHovered) {
      // Плавное появление элементов
      gsap.fromTo(
        [geometryRef.current, afineRef.current],
        {
          opacity: 0,
          scale: 1,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.1,
        },
      );
    } else {
      // Плавное исчезновение элементов
      gsap.to([geometryRef.current, afineRef.current], {
        opacity: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  }, [isHovered]);

  return (
    <main className="flex flex-row h-full w-full min-h-[100vh] justify-center items-start overflow-x-hidden bg-gray-100">
      <div
        className="rounded-[64px] h-[800px] w-[1600px] flex flex-col justify-start items-center mt-[48px] bg-brand-80 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col justify-center items-center mt-[128px] z-10">
          <h1 className="text-gray-0 text-[72px] text-center">
            Все инструменты репетитора
            <br />
            в одном сервисе
          </h1>
          <h2 className="text-gray-20 text-2xl font-normal text-center">
            Видеозвонки, онлайн-доски и заметки, контроль оплат
            <br />
            и автоматические напоминания для учеников
          </h2>
          <Button className="mt-[32px] bg-brand-0 text-brand-100" variant="ghost" size="l">
            Попробовать раньше всех
          </Button>
        </div>

        <div ref={geometryRef} className="absolute top-[40%] left-20">
          <GeometryAnimation active={isHovered} />
        </div>

        <div ref={afineRef} className="absolute top-0 right-0">
          <AfineAnimation active={isHovered} />
        </div>
        <CircleSvgTop className="absolute top-0 left-0 rounded-[64px]" />
        <CircleSvgBottom className="absolute bottom-0 right-0 rounded-[64px]" />
      </div>
    </main>
  );
}
