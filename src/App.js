import {Switch, Route, Link} from "react-router-dom"
import Home from "./Home"
import Movies from "./Movies"
import Shows from "./Shows"
import Buys from "./Buys"
import Profile from "./Profile"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/"></Link>
        <Link to="/movies"></Link>
        <Link to="/shows"></Link>
        <Link to="/buys"></Link>
        <Link to="/profile"></Link>
      </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/shows">
            <Shows />
          </Route>
          <Route path="/buys">
            <Buys />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      
    </div>
  );
}

export default App;
