import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import ShimmerCards from "./ShimmerCards";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  console.log("Body rendered");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");
  const { onlineStatus } = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

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

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );
  }

  return filteredListOfRestaurants?.length === 0 ? (
    <ShimmerCards />
  ) : (
    <div className="body">
      {console.log("Component rendered - 2")}
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
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
        <div className="flex items-center ml-8">
          <label>UserName:</label>
          <input
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            className="border border-black"
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRestaurants.map((resObject) => (
          <Link
            key={resObject?.info?.id}
            to={`/restaurants/${resObject?.info?.id}`}
          >
            {resObject?.info?.avgRating < 4.5 ? (
              <RestaurantCardPromoted resData={resObject} />
            ) : (
              <RestaurantCard resData={resObject} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
