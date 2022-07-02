import React from "react";
import "./css/fonts.css";
import "./css/color.css";
import Header from "./components/header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./modules/Auth/login";
import ViewTask from "./modules/taskManager/viewTask";
import EditTask from "./modules/taskManager/editTask";
import Jokes from "./modules/jokeSpot.js/jokes";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>

          <Route exact path="/viewTask" element={<PrivateRoute />}>
            <Route exact path="/viewTask" element={<ViewTask />} />
          </Route>

          <Route exact path="/editTask" element={<PrivateRoute />}>
            <Route path="/editTask" element={<EditTask />}></Route>
          </Route>

          <Route exact path="/jokeSpot" element={<PrivateRoute />}>
            <Route path="/jokeSpot" element={<Jokes />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
