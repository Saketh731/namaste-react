import IMAGE_URL from "../utils/constants";

export default RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={IMAGE_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};
