import { useState } from "react";
import { restaurentsArray } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurentsArray);
  return (
    <div className="body">
      <div className="filters">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurantsList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setListOfRestaurants(filteredRestaurantsList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resObject) => (
          <RestaurantCard key={resObject?.info?.id} resData={resObject} />
        ))}
      </div>
    </div>
  );
};

export default Body;
