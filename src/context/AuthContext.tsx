'use client';

import { SessionProvider } from 'next-auth/react';
import React, { createContext } from 'react';

// creating the auth context here
const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const values = {};

  // rendering the auth provider here
  return (
    <AuthContext.Provider value={values}>
      <SessionProvider>{children}</SessionProvider>
    </AuthContext.Provider>
  );
};

export default AuthContext;
