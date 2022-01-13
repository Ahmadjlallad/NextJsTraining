import React from "react";
import Link from "next/link";

function Products() {
  return (
    <div>
      <Link href="/">
        <a>HOME</a>
      </Link>
      <div>
        <Link href="/product/1" replace>
          <a>1</a>
        </Link>
      </div>
      <div>2</div>
      <div>3</div>
    </div>
  );
}

export default Products;
