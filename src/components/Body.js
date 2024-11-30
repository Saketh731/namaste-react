import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import ShimmerCards from "./ShimmerCards";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect called - 3");
    fetchRestaurentsData();
  }, []);

  const fetchRestaurentsData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTI"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredListOfRestaurants(restaurants);
  };

  console.log("Outside of render function - 1");

  return filteredListOfRestaurants?.length === 0 ? (
    <ShimmerCards />
  ) : (
    <div className="body">
      {console.log("Component rendered - 2")}
      <div className="filters">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurantsList = listOfRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText?.toLowerCase())
              );

              setFilteredListOfRestaurants(filteredRestaurantsList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurantsList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setFilteredListOfRestaurants(filteredRestaurantsList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurants.map((resObject) => (
          <Link
            key={resObject?.info?.id}
            to={`/restaurants/${resObject?.info?.id}`}
          >
            <RestaurantCard resData={resObject} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
