import React from "react";
import { useRouter } from "next/router";
function RevId() {
  const router = useRouter();
  const { revId, productId } = router.query;
  return (
    <div>
      review: {revId} productId: {productId}
    </div>
  );
}

export default RevId;
