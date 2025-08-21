"use client";

import dynamic from "next/dynamic";
import { useCookieBanner } from "./hooks/useCookieBanner";

const CookieBanner = dynamic(
  () => import("./CookieBanner").then((mod) => ({ default: mod.CookieBanner })),
  { ssr: false }
);

export function CookieBannerWrapper() {
  const { isOpen, acceptCookies } = useCookieBanner();

  if (!isOpen) return null;

  return <CookieBanner acceptCookies={acceptCookies} />;
}
