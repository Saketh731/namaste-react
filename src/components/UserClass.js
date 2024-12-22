import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 0,
    //   count2: 2,
    // };
    console.log(this.props.name + "Child Constructor");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        login: "Default",
        avatar_url: "https://dummy-photo.con",
      },
    };
  }
  async componentDidMount() {
    // console.log(this.props.name + "Child component Did Dount");
    // this.timer = setInterval(() => {
    //   console.log("NAMASTE REACT");
    // }, 1000);
    // console.log("Component Did Mount");
    const data = await fetch("https://api.github.com/users/saketh731");
    const json = await data.json();
    // console.log("json", json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    // console.log("Component Will Unmount");
  }

  render() {
    console.log(this.props.name + "Child Render");
    // const { name, location } = this.props;
    const { name, location, login, avatar_url } = this.state.userInfo;
    // const { count, count2 } = this.state;
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1> */}
        {/* <button
          onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            // this.state.count = this.state.count + 1;
            // this.setState({
            //   count: this.state.count + 1,
            //   count2: this.state.count2 + 1,
            // });
          }}
        >
          Count Increase
        </button> */}
        {/* <h1>Count2: {count2}</h1> */}
        <img src={avatar_url} alt="dummy-photo" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
