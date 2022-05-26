import { useState } from "react";

const useCart = () => {
  const [total, setTotal] = useState(0);
  return {
    total,
    setTotal,
  };
};

export default useCart;
