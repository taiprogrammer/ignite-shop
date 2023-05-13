import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import logo from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";
// Esse componente funciona como um wrapper/container das páginas da aplicação
//chamando a estilização global:
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container>
        <Header>
          {/*Melhora a performance de tamanho (principalmente) da imagem, deixa a imagem o melhor possível para a web*/}
          <Image src={logo} alt="Logo Ignite Shop" />
        </Header>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
