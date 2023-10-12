"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "./theme-provider";
import { atom } from "jotai";
import { MutableRefObject } from "react";

export const skillsAtom = atom<MutableRefObject<HTMLDivElement | null> | null>(
  null
);
export const aboutAtom = atom<MutableRefObject<HTMLDivElement | null> | null>(
  null
);
export const contactAtom = atom<MutableRefObject<HTMLDivElement | null> | null>(
  null
);
export const projectsAtom =
  atom<MutableRefObject<HTMLDivElement | null> | null>(null);

export const servicesAtom =
  atom<MutableRefObject<HTMLDivElement | null> | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
