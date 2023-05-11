import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
// Esse componente funciona como um wrapper/container das páginas da aplicação
//chamando a estilização global:
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
