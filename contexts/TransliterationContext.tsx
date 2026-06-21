"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type TransliterationContextType = {
  showRomanization: boolean;
  toggleRomanization: () => void;
};

const TransliterationContext = createContext<TransliterationContextType>({
  showRomanization: false,
  toggleRomanization: () => {},
});

export function TransliterationProvider({ children }: { children: ReactNode }) {
  const [showRomanization, setShowRomanization] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("showRomanization");
    if (saved === "true") setShowRomanization(true);
  }, []);

  function toggleRomanization() {
    setShowRomanization((prev) => {
      const next = !prev;
      localStorage.setItem("showRomanization", String(next));
      return next;
    });
  }

  return (
    <TransliterationContext.Provider value={{ showRomanization, toggleRomanization }}>
      {children}
    </TransliterationContext.Provider>
  );
}

export function useTransliteration() {
  return useContext(TransliterationContext);
}
