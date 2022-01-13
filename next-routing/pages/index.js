import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Home</h1>

      <Link href={"/blog"}>
        <a>Blog</a>
      </Link>
      <Link href={"/product"}>
        <a>product</a>
      </Link>
      <Link href={"/posts"}>
        <a>posts</a>
      </Link>
      <button
        onClick={() => {
          console.log("click");
          router.push("/product/1");
        }}
      >
        product/1
      </button>
    </div>
  );
}
