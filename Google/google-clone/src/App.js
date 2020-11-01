import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import SearchPage from "./Components/SearchPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ term }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/" + term}>
            <SearchPage searchId3={term} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
