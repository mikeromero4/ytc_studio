import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let developers = [
  { name: "Michael", description: "qrqwerwer", icon: "" },
  { name: "Yosias", description: "Graduated from CSUSB with Bachelor of Science in Computer Engineering - test", icon: "" },
  { name: "Hector", description: "", icon: "" }
];

function UserList() {
  let users = developers.map(e => {
    return (
      <div>
        {e.name}
        <br />
        {e.description}
        <img alt="userIcon" src={e.icon} />
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
