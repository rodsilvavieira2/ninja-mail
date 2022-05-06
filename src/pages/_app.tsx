import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { Header } from "@src/components";
import { Footer } from "@src/components/footer";
import { GlobalStyles, theme } from "@src/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />

      <Component {...pageProps} />

      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
