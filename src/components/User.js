import { useState, useEffect } from "react";

const User = ({ name }) => {
  useEffect(() => {
    // console.log("Mount");
    const timer = setInterval(() => {
      // console.log("NAMASTE REACT Functional component");
    }, 1000);
    return () => {
      // console.log("Unmount");
      clearInterval(timer);
    };
  }, []);
  // console.log("Render");
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="m-3 p-4 bg-gray-50 rounded-lg">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Hyderabad</h3>
      <h4>Contact: @sakethkota73</h4>
    </div>
  );
};

export default User;
