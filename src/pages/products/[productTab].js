import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ProductTab = () => {
  const router = useRouter();
  const { productTab } = router.query;

  useEffect(() => {
    if (productTab) {
      console.log("productTab", productTab);
    } else {
      console.log("productTab not found");
      // Link.push("/404");
    }
  }, [productTab]);

  return <div>{productTab}</div>;
};

export default ProductTab;
