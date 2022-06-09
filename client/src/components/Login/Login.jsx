import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Login(props) {
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      user_email: event.target.user_email.value,
      user_password: event.target.user_password.value,
    };
    console.log(data);
    fetch("/login", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
      credentials: "include", /// работает заместо 
    })
      .then((res) => res.json())
      .then((data) => console.log);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control  name="user_email" type="text" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control  name="user_password" type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default Login;
