import React from "react";
import "./styles.css";
import Button from "./components/button";
import Avatar from "./components/Avatar";

// const squareArr=[1,2,3].map((elem)=><li>{elem}</li>)
// console.log(squareArr)

const users = [
  {
    id: 1,
    avater_url: "https://avatars.githubusercontent.com/u/101393663?v=4",
    name: "Suman",
    rounded: true
  },
  {
    id: 2,
    avater_url: "https://avatars.githubusercontent.com/u/101393663?v=4",
    name: "Saurav",
    rounded: false
  }
];
const userAvater = users.map((user) => (
  <Avatar
    key={user.id}
    src={user.avater_url}
    name={user.name}
    rounded={user.rounded}
  />
));

export default function App() {
  return (
    <div className="App">
      <h1>Hello RCT 101</h1>
      {userAvater}
      <Button text="Button1" onClick={() => alert("1")}></Button>
      <br />
      <Button text="Button2" onClick={() => alert("2")}></Button>
      {/* <ul> {squareArr}</ul> */}

      {/* <Avatar
      src="https://avatars.githubusercontent.com/u/101393663?v=4" 
      name="Suman"
      rounded={false}
      />
      <Avatar
      src="https://avatars.githubusercontent.com/u/101393663?v=4" 
      name="Saurav"
      rounded={true}
      /> */}
    </div>
  );
}
