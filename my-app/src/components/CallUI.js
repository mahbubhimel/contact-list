import { Button, Container,Row , Col} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"



export default function CallUI(){

    const location = useLocation();
    const {name, number} = location.state;

    

    return (
        <>
            <Container>
                <Row className="d-flex justify-content-center">{name}</Row>
                <Row className="d-flex justify-content-center">{number}</Row>
                <Row className="d-flex justify-content-center" >
                    <Col className="col-3 d-flex justify-content-center">
                      <Link to="/details" state={{
                          name : name,
                          number: number
                      }}>
                      <Button variant="danger">End</Button>
                      </Link>
                    </Col>
                </Row>
                
            </Container>
        </>
    )
}