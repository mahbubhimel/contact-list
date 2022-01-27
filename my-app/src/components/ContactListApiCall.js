import React, { useEffect, useState } from "react";
import { contactList } from "./contacts";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ContactListApiCall() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://61f27a822219930017f5061e.mockapi.io/contactlist`)
      .then((response) => {
        setApiData(response.data);
      });
  }, []);

  return (
    <Container>
      {/* {contactList.map(contact => (
             <Card key={contact.name}>
              <Card.Body>
                <Link to="/details" state={{
                    name: contact.name,
                    number : contact.number
                }}>{contact.name}</Link>
              </Card.Body>
              <Card.Body>{contact.number}</Card.Body>
             </Card>
            )
            )} */}

      {apiData.map((contact) => (
        <Card key={contact.name}>
          <Card.Body>
            <Link
              to="/details"
              state={{
                name: contact.name,
                number: contact.number,
              }}
            >
              {contact.name}
            </Link>
          </Card.Body>
          <Card.Body>{contact.number}</Card.Body>
        </Card>
      ))}
    </Container>
  );
}
