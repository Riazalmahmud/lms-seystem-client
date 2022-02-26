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
import Login from "./mainPage/Login/Login.js";
import Register from "./mainPage/Register/Register.js";
import AuthProvider from "./Hooks/AuthProvider.js";
import Novigation from "./SharePage/Navigation/Novigation.js";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Novigation></Novigation>
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
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
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
