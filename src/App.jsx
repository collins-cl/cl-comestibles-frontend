import "./App.css";
import { useState, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/LogIn/Login";
import Signup from "./Pages/SignUp/Signup";

const initialState = null;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const [profilestate, setProfileState] = useState({});

  return (
    <>
      <Router>
        <div className="App"></div>
        <Routes>
          <Route
            path="/"
            exact
            element={<Home count={count} profile={profilestate} />}
          />

          <Route
            path="/shop"
            element={<Shop count={count} dispatch={dispatch} />}
          />

          <Route
            path="/cart"
            element={<Cart count={count} dispatch={dispatch} />}
          />

          <Route
            path="/login"
            element={<Login setProfile={setProfileState} />}
          />

          <Route path="/register" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
