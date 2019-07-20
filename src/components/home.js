import React from "react";
import developerDescriptions from "../data/developerData";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function UserList() {
  let users = developerDescriptions.map(user => {
    return (
      <Card bg="light" key={user.name} id="user-summary">
        <Card.Header>
          <Link to={"/" + user.name}>
            <h3>{user.name}</h3>
          </Link>
        </Card.Header>
        <div class="card-content">
          <Card.Text>{user.description}</Card.Text>
          <Card.Img alt="userIcon" src={user.icon} />
        </div>
        <Card.Footer>
          <Link to={"/" + user.name}>More Info</Link>{" "}
        </Card.Footer>
      </Card>
    );
  });
  return users;
}

function Home() {
  return (
    <div>
      <div class="top-box">
        welcome to ytc studios!! here's a list of our studio developers:
      </div>
      <div class="user-list">
        <UserList />
      </div>
    </div>
  );
}

export default Home;
