import { StarIcon } from "@heroicons/react/solid";

import Currency from "react-currency-formatter";

import Image from "next/legacy/image";
import React from "react";

import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "@/slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    // pushes item into redux, the basketSlice
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    // remove item from redux, done in the basketSlice function
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      {/* Image */}

      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* Middle Part with title, descrip, price, prime */}

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>

        <Currency quantity={price} currency="CAD" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              src="https://links.papareact.com/fdw"
              alt="prime"
              loading="lazy"
              className="w-12"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
