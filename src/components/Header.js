import Introduction from "./Introduction";
import Library from "./Library";
import Resume from "./Resume";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header = () => {
  return (
    <Router>
      <div class="p-6 mx-auto bg-gray-400  shadow-lg flex justify-center space-between ">
        <div class="space-x-14">
          <Link class="text-xl font-mono  text-gray-50" to="/">
            Home
          </Link>
          <Link class="text-xl font-mono  text-gray-50" to="/components">
            Components
          </Link>
          <Link class="text-xl font-mono  text-gray-50" to="/resume">
            Resume
          </Link>
          <Link class="text-xl font-mono  text-gray-50" to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <Switch>
          <Route exact path="/">
            <Introduction/>
          </Route>
          <Route exact path="/components">
            <Library/>
          </Route>
          <Route exact path="/resume">
            <Resume/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>

      </Switch>
    </Router>
  );
};
export default Header;
