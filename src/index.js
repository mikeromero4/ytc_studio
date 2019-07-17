import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let developers = [
  { name: "Michael", description: "qrqwerwer", icon: "" },
  { name: "Yosias", description: "Graduated from CSUSB with Bachelor of Science in Computer Engineering", icon: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.worldnomads.com%2FExplore%2Fsouth-east-asia%2Fraja-ampat-istock-lead.jpg&imgrefurl=https%3A%2F%2Fwww.worldnomads.com%2Fexplore%2Fsoutheast-asia%2Findonesia%2Fexploring-west-papua&docid=AM3zL0yef77BwM&tbnid=o7cerQoh78BZ-M%3A&vet=10ahUKEwjcg47V4brjAhWV4J4KHQGqCcwQMwiOASgRMBE..i&w=750&h=490&bih=726&biw=1280&q=papua&ved=0ahUKEwjcg47V4brjAhWV4J4KHQGqCcwQMwiOASgRMBE&iact=mrc&uact=8" },
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
