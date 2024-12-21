import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsAPI } from "./utils/appSlice";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
const About = lazy(() => import("./components/About"));
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const Grocery = lazy(() => import("./components/Grocery"));

// not using keys (not acceptable) <<<<< using index as key <<<<<<<<<< using unique id as key (best practice)

const AppLayout = () => {
  const [userName, setUserName] = useState(null);

  //Authentication
  useEffect(() => {
    //Make API call to send Username and Password for authentication
    const timerId = setTimeout(() => {
      const data = {
        name: "Saketh Kota",
      };
      setUserName(data?.name);
    }, 2000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return (
    <Provider store={appStore}>
      {/* <ApiProvider api={productsAPI}> */}
      <UserContext.Provider
        value={{ loggedInUser: userName, setUserName: setUserName }}
      >
        <div className="app">
          {/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}> */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
        </div>
      </UserContext.Provider>
      {/* </ApiProvider> */}
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>About Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Grocery Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
