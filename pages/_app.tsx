import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AptosClient } from 'aptos';

import { createContext, useMemo } from 'react';

export const AptosContext = createContext<AptosClient | null>(null);

function MyApp( { Component, pageProps }: AppProps ) {
  const aptosClient = useMemo(() => new AptosClient('https://fullnode.devnet.aptoslabs.com/v1'), []);


  return (
    <AptosContext.Provider value={aptosClient}>
        <Component {...pageProps} />
     </AptosContext.Provider>
  );
}

export default MyApp;
