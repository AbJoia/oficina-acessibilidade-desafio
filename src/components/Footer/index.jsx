import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

export function Footer() {
  return (
    <Container fluid className="footer-container">
      <Row>
        <Col className="d-flex p-3 justify-content-center align-items-center">
          <span className="span">
            Ciclo de palestras Residência em TIC Software 2026.1
          </span>
        </Col>
      </Row>
    </Container>
  );
}
