import developers from "./developer_pages/index";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home";
import Layout from "./components/layout";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./styles.css";

function App() {
  let developerPages = [];
  for (let dev in developers) {
    developerPages.push(<Route path={"/" + dev} component={developers[dev]} />);
  }

  return (
    <Router>
      <Layout>
        <Route exact path={["/home", "/"]} component={Home} />
        {developerPages}
      </Layout>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/*

*/
