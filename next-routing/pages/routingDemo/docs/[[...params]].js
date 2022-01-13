// it will match any path that in the file name
import React from "react";
import { useRouter } from "next/router";
function params() {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);
  return <div>catch me dady</div>;
}

export default params;
