import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.scss";
import { Link } from "react-router-dom";
import {BiSolidLock, BiSolidUser} from "react-icons/bi"
import {IoMdMail} from "react-icons/io"

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();


  const handleFinish = async (e) => {
    e.preventDefault();
    const usernameValue = usernameRef.current.value;
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    setUsername(usernameValue);
    setEmail(emailValue);
    setPassword(passwordValue);
    try {
      await axios.post("auth/register", {
        email : emailValue,
        username: usernameValue,
        password: passwordValue,
      });
      navigate("/login");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          {/* <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          /> */}
          <Link to="/login">
            <button className="loginButton">Sign In</button>
          </Link>
        </div>
      </div>
          <form className="input">
          <h1>Sign Up</h1>
            <div className="inputType">
            <BiSolidUser className="inputIcon" /> 
            <input type="text" placeholder="Username" ref={usernameRef} />
            </div>
            
            <div className="inputType">
              <IoMdMail className="inputIcon"  />
            <input type="Email" placeholder="Email" ref={emailRef} />
            </div>


            <div className="inputType">
             <BiSolidLock className="inputIcon"  />
            <input type="password" placeholder="Password" ref={passwordRef} />
            </div>


            <button className="registerButton" onClick={handleFinish}>
              Sign Up
            </button>
          </form>
      </div>
  );
}
