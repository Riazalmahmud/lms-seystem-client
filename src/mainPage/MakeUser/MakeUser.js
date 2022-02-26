import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const MakeUser = () => {
  const [loadData, setLoadData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loadData };
    newData[field] = value;
    setLoadData(newData);
  };
  const handaleOnSubmit = (e) => {
    setLoadData(loadData.email, loadData.password);
    e.preventDefault();
  };
  return (
    <div className="w-50">
      <Form onSubmit={handaleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onBlur={handleOnBlur}
            name="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onBlur={handleOnBlur}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MakeUser;
