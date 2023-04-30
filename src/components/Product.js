import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";

import { StarIcon } from "@heroicons/react/solid";

import Currency from "react-currency-formatter";

import { useDispatch } from "react-redux";

import { addToBasket } from "@/slices/basketSlice"; // auto import instead of "../slices/basketSlice"

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(1);
  const [hasPrime, setHasPrime] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setRating(Math.floor(Math.random() * (5 - 1 + 1)) + 1);

    setHasPrime(Math.random() < 0.5);
  }, []);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime
    };

    // sends product as action to REDUX store, the basket slice
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 italic text-gray-400">{category}</p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <StarIcon
              className="h-5 text-yellow-500"
              key={Math.random() * Math.random()}
            />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="CAD" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img src="https://links.papareact.com/fdw" alt="" className="w-12" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button" onClick={addItemToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
