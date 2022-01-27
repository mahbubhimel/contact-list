import { Link, useLocation } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
export default function ContactDetails() {
  const location = useLocation();
  const { name, number } = location.state;

  var arr = [];

  function handleRecent(e) {
    e.preventDefault();
    arr.push({ name: name, number: number });
    console.log(arr);
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{number}</Card.Text>
          <Link
            to="/callui"
            state={{
              name: name,
              number: number,
            }}
          >
            <Button variant="success" type="button" onChange={handleRecent}>
              Call
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <hr></hr>
      <Footer></Footer>
    </Container>
  );
}
