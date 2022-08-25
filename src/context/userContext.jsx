import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useUserContext = () => {
  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);
  const [loginsuccess, setLoginSuccess] = useState("");
  const [removelogin, setRemoveLogin] = useState(false);
  const [message, setMessage] = useState(false);
  const [setmessage, setSetMessage] = useState(false);
  const { email, password } = state;

  const handleChange =  (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const accessToken = localStorage.getItem("accessToken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((result) => {
        if (result.data.error) {
          setSetMessage(true);
          setMessage(result.data.error);
        } else {
          setState(initialState);
          setLoginSuccess(result.data.success);
          setSetMessage(false);
          setRemoveLogin(true);
          setTimeout(() => {
            navigate(-1);
          }, 3000);
          localStorage.setItem("accessToken", JSON.stringify(result.data.user));
        }
      })
      .catch((result) => {
        console.log(result.data.error);
      });
  };

  return {
    message,
    loginsuccess,
    handleChange,
    handleSubmit,
    password,
    email,
    setmessage,
    removelogin,
  };
};

export default useUserContext;
