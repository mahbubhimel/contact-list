import { Col, Container, Row } from "react-bootstrap";
import AddContact from "./AddContact"
import EditContact from "./EditContact"
import DeleteContact from "./DeleteContact"


export default function Footer(){


    return(
        <Container>
            <Row>
                <Col className="col-3">
                    <AddContact></AddContact>
                </Col>
                <Col className="col-3">
                    <EditContact></EditContact>
                </Col>
                <Col className="col-3">
                    <DeleteContact></DeleteContact>
                </Col>
            </Row>
        </Container>
    )
}