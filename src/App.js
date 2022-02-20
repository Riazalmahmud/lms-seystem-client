import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Home from "./mainPage/Home/Home.js";
import Dashboard from "./Dashboard/Dashboard/Dashboard.js";
import OverView from "./mainPage/OverView/OverView.js";
import MakeUser from "./mainPage/MakeUser/MakeUser.js";
import About from "./mainPage/About/About.js";
import UserObserved from "./Dashboard/Chart/UserObserved/UserObserved.js";
import CircaleChirt from "./Dashboard/Chart/CircaleChirt/CircaleChirt.js";
import TimeObsered from "./Dashboard/Chart/TimeObsered/TimeObsered.js";
import Contact from "./mainPage/Contact/Contact.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/OverView">
            <OverView />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/UserObserved">
            <UserObserved />
          </Route>
          <Route path="/CircaleChirt">
            <CircaleChirt />
          </Route>
          <Route path="/TimeObsered">
            <TimeObsered />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/MakeUser">
            <MakeUser />
          </Route>
          <Route path="/Dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route exact path="/">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
