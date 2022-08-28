import "./App.css";
import { useState, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/LogIn/Login";
import Signup from "./Pages/SignUp/Signup";
import Profile from "./Pages/Profile/Profile";
import { CookiesProvider } from "react-cookie";
import Flashsale from "./Components/Flashsale/Flashsale";
import ForgetPass from "./Pages/ForgetPass/ForgetPass";

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
      <CookiesProvider>
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

            <Route path="/profile" element={<Profile />} />

            <Route path="/flashsale" element={<Flashsale />} />

            <Route path="/resetpassword" element={<ForgetPass />} />
          </Routes>
        </Router>
      </CookiesProvider>
    </>
  );
}

export default App;
