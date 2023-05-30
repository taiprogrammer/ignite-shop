import { HomeContainer, Product } from "./home";
import { useKeenSlider } from "keen-slider/react";

import Image from "next/image";
import camiseta2 from "../assets/shirts/2.png";
import camiseta3 from "../assets/shirts/3.png";
import camiseta4 from "../assets/shirts/4.png";

import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <>
      <HomeContainer ref={sliderRef} className="keen-slider">
        <Product className="keen-slider__slide">
          <Image src={camiseta2} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 69,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={camiseta3} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 69,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={camiseta4} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 69,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={camiseta2} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 69,90</span>
          </footer>
        </Product>
      </HomeContainer>
    </>
  );
}
