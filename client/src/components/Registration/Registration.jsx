// import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Registration(props) {
  //  const [] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      user_name: event.target.user_name.value,
      user_email: event.target.user_email.value,
      user_password: event.target.user_password.value,
    };
    console.log(data);
    fetch("/registration", {
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
        <Form.Label>Registration</Form.Label>
        <Form.Control name="user_name" type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          name="user_email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          name="user_password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Registration;
