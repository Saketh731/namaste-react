import { useState } from "react";
import ItemList from "./ItemList";

export default RestaurantCategory = ({
  data,
  showItems,
  setSelectedCardIndex,
}) => {
  return (
    <div className="flex justify-center">
      <div className="w-6/12 my-4 bg-gray-50 shadow-lg p-4  cursor-pointer">
        <div className="flex justify-between" onClick={setSelectedCardIndex}>
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>{showItems ? "⬆" : "⬇"}</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};
