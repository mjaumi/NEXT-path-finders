'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

// declaring the redux provider here
export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
