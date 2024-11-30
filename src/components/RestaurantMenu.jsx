import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShimmerCards from "./ShimmerCards";
import { RESTAURANT_MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const json = await data.json();
    console.log(json, json?.data?.cards?.[2]?.card?.card?.info);
    setResInfo(json?.data);
  };

  if (resInfo === null) {
    return <ShimmerCards />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines?.join(",")}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.id}>
            {item?.card?.info?.name} - Rs.
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
      {/* <h3>{costForTwoMessage}</h3> */}
    </div>
  );
};

export default RestaurantMenu;
