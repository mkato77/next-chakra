import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { theme } from '@/config/chakra';

import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
