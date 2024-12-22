import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { withPromotedLabel } from "../RestaurantCard";

it("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const restaurantName = screen.getByText("Taco Bell");
  expect(restaurantName).toBeInTheDocument();
});

// it("Should render RestaurantCard component with Promoted Label", () => {
//   const PromotedRestaurantCard = withPromotedLabel(<RestaurantCard />);
//   render(<PromotedRestaurantCard resData={MOCK_DATA} />);
//   const promotedLabel = screen.getByText("Promoted");
//   expect(promotedLabel).toBeInTheDocument();
// });
