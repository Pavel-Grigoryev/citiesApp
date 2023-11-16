'use client';

import React from 'react';
import { Layout } from '@/components/Layout';
import { Start } from '@/components/screens/Home/Start';
import { useAppSelector } from '@/common/hooks';
import { citiesSelectors, PlayPanel } from '@/features/cities';

export const Home = () => {
  const isPlaying = useAppSelector(citiesSelectors.selectIsPlaying);
  return (
    <Layout>
      {!isPlaying && <Start />}
      {isPlaying && <PlayPanel />}
    </Layout>
  );
};
