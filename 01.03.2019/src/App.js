import React, { Component } from "react";
import { Router } from "@reach/router";
import Index from "./components/Index";
import "./App.css";
import Contact from "./components/Contact";
import News from "./components/News";
import NavHome from "./components/NavHome";
import NewsList from "./components/NewsList";

const ApiKey = "8586fc0f4c154e46a7fa9bbd4bb2b54f";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHome />
        <Router>
          <Index path="/" />
          <Contact path="/contact" />
          <News path="/news" />
          <NewsList path="/news/:source" ApiKey={ApiKey} />
        </Router>
      </div>
    );
  }
}

export default App;
