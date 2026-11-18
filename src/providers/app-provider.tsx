"use client";

import { ReactNode } from "react";
import { Toaster } from "sonner";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <>
      {children}
      <Toaster position="top-right" richColors />
    </>
  );
}