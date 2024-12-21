import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { onlineStatus } = useOnlineStatus();
  console.log("Header rendered");

  // console.log(
  //   "Header component re-renders and this console gets executed/printed after every state change"
  // );

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store (slice of a store) using selector. Basically selector gives access to whole store but you just need to access a slice of it. That means when ever the state changes the cart also get updated as it is subscibed to the store using a selector
  const cartItems = useSelector((state) => state.cart.items);

  // Never write it like this as this impacts performance because this is like subscribing to the entire store. Whenever the store updates our component will get effected
  // const store = useSelector((state) => state);
  // const cartItems = store.cart.items
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-blue-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            {" "}
            <Link to="/cart">Cart</Link> ( {cartItems?.length} items )
          </li>
          <button
            className="login-btn"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
