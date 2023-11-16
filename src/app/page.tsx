'use client';

import { Provider } from 'react-redux';
import { Home } from '@/components/screens/Home';
import { store } from '@/app/store';

export default function HomePage() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
