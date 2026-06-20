"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Voices load asynchronously; cache them once available.
let cachedVoices: SpeechSynthesisVoice[] = [];

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      cachedVoices = voices;
      resolve(voices);
      return;
    }
    const handler = () => {
      cachedVoices = window.speechSynthesis.getVoices();
      resolve(cachedVoices);
      window.speechSynthesis.removeEventListener("voiceschanged", handler);
    };
    window.speechSynthesis.addEventListener("voiceschanged", handler);
    // Fallback: resolve after 1s even if event never fires
    setTimeout(() => resolve(cachedVoices), 1000);
  });
}

export function useAudio() {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState<boolean | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      setSupported(true);
      // Pre-load voices so first click is instant
      loadVoices();
    } else {
      setSupported(false);
    }
  }, []);

  const speak = useCallback(async (text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    const synth = window.speechSynthesis;

    // Chrome bug: synth can get stuck in paused state — always resume first
    if (synth.paused) synth.resume();
    synth.cancel();

    const voices = cachedVoices.length > 0 ? cachedVoices : await loadVoices();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ta-IN";
    utterance.rate = 0.85;
    utterance.pitch = 1;

    // Prefer an explicit Tamil voice; fall back to default (still produces sound)
    const tamilVoice =
      voices.find((v) => v.lang === "ta-IN") ??
      voices.find((v) => v.lang.startsWith("ta")) ??
      null;
    if (tamilVoice) utterance.voice = tamilVoice;

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    utteranceRef.current = utterance;

    // Small delay after cancel() — Chrome sometimes needs a tick
    setTimeout(() => synth.speak(utterance), 50);
  }, []);

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
  }, []);

  return { speak, stop, speaking, supported };
}
