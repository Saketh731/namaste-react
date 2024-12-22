import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});
it("Should load Restaurant Menu cards", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  //Click accoridan and open food items list
  const accoridanHeader = screen.getByText("Burgers & Wraps (20)");
  fireEvent.click(accoridanHeader);
  const foodItems = screen.getAllByTestId("food-items-test-id");
  expect(foodItems.length).toBe(20);

  //Add a food item
  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart ( 1 items )")).toBeInTheDocument();

  //Add one more food item
  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart ( 2 items )")).toBeInTheDocument();

  //Check if your Cart component has 2 items
  expect(screen.getAllByTestId("food-items-test-id").length).toBe(22);

  //On click of Clear cart, the cart should be empty
  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn);
  expect(screen.getAllByTestId("food-items-test-id").length).toBe(20);
  expect(
    screen.getByText("Cart is empty. Add items to your cart")
  ).toBeInTheDocument();
});
