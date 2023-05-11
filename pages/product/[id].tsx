import { useRouter } from "next/router";

export default function Products() {
  const router = useRouter();

  return (
    <h1>
      Products <span>{JSON.stringify(router.query)}</span>
    </h1>
  );
}
