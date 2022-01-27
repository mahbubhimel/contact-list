import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { contactList } from "./contacts";
import axios from 'axios';

export default function AddContactDetails() {
  const [name, setName] = useState();
  const [number, setNumber] = useState();

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeNumber(e) {
    setNumber(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    axios.post(`https://61f27a822219930017f5061e.mockapi.io/contactlist`, {
            name,
            number,
        })
  }

  return (
    <Container>
      <Form onSubmit={onFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={handleChangeName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Number"
            onChange={handleChangeNumber}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Contact
        </Button>
      </Form>
    </Container>
  );
}
