import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let developers = [
  { name: "Michael", description: "qrqwerwer", icon: "" },
  { name: "Yosias", description: "Graduated from CSUSB with Bachelor of Science in Computer Engineering", icon: "https://media.worldnomads.com/Explore/south-east-asia/raja-ampat-istock-lead.jpg" },
  { name: "Hector", description: "", icon: "" }
];

function UserList() {
  let users = developers.map(e => {
    return (
      <div>
        {e.name}
        <br />
        {e.description}
        <img alt="userIcon" src={e.icon} height=100/>
        <br /> <br />
      </div>
    );
  });
  return users;
}

function App() {
  return (
    <div>
      welcome to ytc studios!! here's a list of our studio developers:
      <br /> <br />
      <UserList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);