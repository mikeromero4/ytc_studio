import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let developers = [
  { name: "Michael", description: "qrqwerwer", icon: "" },
  { name: "Yosias", description: "Graduated from CSUSB with Bachelor of Science in Computer Engineering", icon: "https://media.worldnomads.com/Explore/south-east-asia/raja-ampat-istock-lead.jpg" },
  { name: "Hector", description: "I'm a cyber security student at CSUSB, I'm a part time barber and I have horse whos name is Hercules and a cat whos name is Tamale.", icon: "https://i.pinimg.com/originals/ac/fb/df/acfbdfa558edf7a0e5e57c1a93061e64.jpg" }, 
  { name: "Ekay", description: "I'm a vibe Curator ", icon: "http://hubwav.com/wp-content/uploads/2017/10/Screen-Shot-2017-10-19-at-7.19.19-PM.png" },
];

function UserList() {
  let users = developers.map(e => {
    return (
      <div>
        {e.name}
        <br />
        {e.description}
        <img alt="userIcon" src={e.icon} height={100}/>
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
