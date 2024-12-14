import { useState } from "react";
import IMAGE_URL from "../utils/constants";

export default RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300">
      <img className="rounded-lg" src={IMAGE_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};
