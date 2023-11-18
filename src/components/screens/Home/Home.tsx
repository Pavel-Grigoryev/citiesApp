'use client';

import React from 'react';
import { Layout } from '@/components/Layout';
import { Start } from '@/components/screens/Home/Start';
import { useAppSelector } from '@/common/hooks';
import { citiesSelectors, PlayPanel } from '@/features/cities';
import { Results } from '@/components/screens/Home/Results';

export const Home = () => {
  const isPlaying = useAppSelector(citiesSelectors.selectIsPlaying);
  const isGameOver = useAppSelector(citiesSelectors.selectIsGameOver);
  return (
    <Layout>
      {!isPlaying && <Start />}
      {isPlaying && !isGameOver && <PlayPanel />}
      {isGameOver && <Results />}
    </Layout>
  );
};
