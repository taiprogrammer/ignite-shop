import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../product";
import Image from "next/image";

export default function Products() {
  const router = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>{/* <Image /> */}</ImageContainer>
      <ProductDetails>
        <h1>Camiseta x</h1>
        <span>R$ 60,00</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione
          error officia voluptas tempora? Inventore perspiciatis officia
          eveniet, deserunt repudiandae sunt ipsum ad minima necessitatibus
          distinctio aliquam, quam aspernatur vitae.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
