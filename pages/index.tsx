import Image from "next/image";
import { HomeContainer, Product } from "./home";

import camiseta2 from "../assets/shirts/2.png";
import camiseta3 from "../assets/shirts/3.png";
import camiseta4 from "../assets/shirts/4.png";

export default function Home() {
  return (
    <>
      <HomeContainer>
        <Product>
          <Image src={camiseta2} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 69,90</span>
          </footer>
        </Product>
        <Product>
          <Image src={camiseta3} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 69,90</span>
          </footer>
        </Product>
        <Product>
          <Image src={camiseta4} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 69,90</span>
          </footer>
        </Product>
      </HomeContainer>
    </>
  );
}
