'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function StickyGsap() {
  const pinRef = useRef(null); // кто «липнет»
  const stopRef = useRef(null); // стоп-маркер

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: pinRef.current, // когда верх pinRef дошёл до верха окна
        start: 'top top',
        endTrigger: stopRef.current, // отклеить, когда stopRef коснётся верха
        end: 'top top',
        pin: true,
        pinSpacing: false, // не оставлять пустой участок
        anticipatePin: 1, // сгладить «дёргание» на iOS
      });
    });
    return () => ctx.revert(); // очистка при размонтировании
  }, []);

  return (
    <>
      <div style={{ height: '120vh' }} /> {/* проскролл до липкого */}
      <div ref={pinRef} className="box">
        Я липну с GSAP
      </div>
      <div className="h-screen w-full bg-red-500">1</div>
      <div style={{ height: 1 }} />
      {/* маркер-ограничитель */}
      <div ref={stopRef} style={{ height: '200vh' }} />
    </>
  );
}
