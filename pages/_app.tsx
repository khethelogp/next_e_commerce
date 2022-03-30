import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import CommerceProvider from "../context/CommerceContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommerceProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </CommerceProvider>
  );
}

export default MyApp;
