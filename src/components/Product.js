import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";

import { StarIcon } from "@heroicons/react/solid";

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(1);

  useEffect(() => {
    setRating(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
  }, []);

  return (
    <div>
      <p>{category}</p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4>{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <StarIcon className="h-5" />
          ))}
      </div>
    </div>
  );
}

export default Product;
