"use client";

import { useState, useEffect, useCallback } from "react";

export type ProgressState = {
  completedTopics: string[];
  testScores: Record<string, number>;
  lessonChecks: Record<string, boolean>;
};

const STORAGE_KEY = "tamil-palli-progress";

const defaultState: ProgressState = {
  completedTopics: [],
  testScores: {},
  lessonChecks: {},
};

export function useProgress() {
  const [state, setState] = useState<ProgressState>(defaultState);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setState(JSON.parse(raw));
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  const save = useCallback((next: ProgressState) => {
    setState(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }, []);

  const markTopicComplete = useCallback(
    (topicId: string) => {
      if (state.completedTopics.includes(topicId)) return;
      save({ ...state, completedTopics: [...state.completedTopics, topicId] });
    },
    [state, save]
  );

  const saveTestScore = useCallback(
    (topicId: string, score: number) => {
      save({ ...state, testScores: { ...state.testScores, [topicId]: score } });
    },
    [state, save]
  );

  const toggleLessonCheck = useCallback(
    (lessonKey: string) => {
      save({
        ...state,
        lessonChecks: { ...state.lessonChecks, [lessonKey]: !state.lessonChecks[lessonKey] },
      });
    },
    [state, save]
  );

  const resetProgress = useCallback(() => {
    save(defaultState);
  }, [save]);

  const isTopicComplete = useCallback(
    (topicId: string) => state.completedTopics.includes(topicId),
    [state.completedTopics]
  );

  const getTestScore = useCallback(
    (topicId: string) => state.testScores[topicId] ?? null,
    [state.testScores]
  );

  const isLessonChecked = useCallback(
    (lessonKey: string) => !!state.lessonChecks[lessonKey],
    [state.lessonChecks]
  );

  return {
    state,
    loaded,
    markTopicComplete,
    saveTestScore,
    toggleLessonCheck,
    resetProgress,
    isTopicComplete,
    getTestScore,
    isLessonChecked,
  };
}
