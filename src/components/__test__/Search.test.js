import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should Search restaurants list for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("res-card-test-id");
  expect(cardsBeforeSearch.length).toBe(20);
  const searchInput = screen.getByTestId("search-input-test-id");
  const searchBtn = screen.getByRole("button", { name: "Search" });
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  //Screen should load one card
  const cardsAfterSearch = screen.getAllByTestId("res-card-test-id");
  expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter Top Rated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFilter = screen.getAllByTestId("res-card-test-id");
  expect(cardsBeforeFilter.length).toBe(20);
  const topRatedRestaurantsBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedRestaurantsBtn);

  //Screen should load one card
  const cardsAfterFilter = screen.getAllByTestId("res-card-test-id");
  expect(cardsAfterFilter.length).toBe(9);
});
