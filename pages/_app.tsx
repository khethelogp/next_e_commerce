import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import CommerceProvider from "../context/CommerceContext";
import { ThemeProvider } from "@mui/styles";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import createEmotionCache from "../src/createEmotionCache";
import theme from "../src/theme";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionChache?: EmotionCache;
}

function MyApp({
  Component,
  pageProps,
  emotionChache = clientSideEmotionCache,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionChache}>
      <ThemeProvider theme={theme}>
        <CommerceProvider>
          <Layout>
            <CssBaseline />
            <Component {...pageProps} />;
          </Layout>
        </CommerceProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
