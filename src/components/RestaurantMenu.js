import { useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerCards from "./ShimmerCards";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const { resId } = useParams();

  const { resInfo } = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerCards />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card;

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines?.join(",")}</p>
      {/* Categories accoridan */}
      {categories?.map((category, index) => {
        return (
          // Controlled Component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === selectedCardIndex && true}
            setSelectedCardIndex={() => {
              if (selectedCardIndex === index) {
                setSelectedCardIndex(null);
              } else {
                setSelectedCardIndex(index);
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
