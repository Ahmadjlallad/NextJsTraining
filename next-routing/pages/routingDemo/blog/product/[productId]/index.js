import React from "react";
import { useRouter } from "next/router";
export default function ProductDetails() {
  const router = useRouter();
  console.log(router);
  return <div>Product Details {router.query.productId}</div>;
}
