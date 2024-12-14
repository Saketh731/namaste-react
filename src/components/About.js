import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  async componentDidMount() {
    // console.log("Parent component Did Dount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <div className="flex">
          <span>LoggedIn User: </span>
          <UserContext.Consumer>
            {(data) => <div className="font-bold">{data?.loggedInUser}</div>}
          </UserContext.Consumer>
        </div>
        <h2>Namaste React About Page</h2>
        {/* <User name="Saketh" /> */}
        <UserClass name="Saketh" location="Hyderabad" />
        {/* <UserClass name="Elon Musk" location="US" /> */}
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>Namaste React About Page</h2>
//       <User name="Saketh" />
//       <UserClass name="Saketh" location="Hyderabad" />
//     </div>
//   );
// };

export default About;
