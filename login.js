import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  let email = useRef();
  let pass = useRef();
  let move = useNavigate();

  function f1(e) {
    e.preventDefault();
    let a = email.current.value;
    let b = pass.current.value;

    if (a === "" || b === "") {
      window.alert("Please enter all the credentials");
    } else if (a === "fathima@gmail.com" && b === "123") {
      move("/main"); // Navigate to main page
    } else {
      window.alert("Wrong credentials");
    }
  }

  return (
    <center>
    <form onSubmit={f1}>
      <center>
        <h1>Welcome to Login Page</h1>
        <input type="text" placeholder="Enter email" ref={email} /><br /><br />
        <input type="password" placeholder="Enter Password" ref={pass} /><br /><br />
        <button>Login</button>
      </center>
    </form>
    </center>
  );
}

export default Login;
