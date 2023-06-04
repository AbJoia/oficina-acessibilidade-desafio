import { Container, Row, Col } from "react-bootstrap";

import userIcon from "../../assets/img/usericon.svg";

import "./style.css";

export function Header() {
  return (
    <Container fluid className="header-container"  id="banner">
      <Container>
        <Row className="d-flex flex-lg-row p-1 justify-content-center">
          <Col className="d-flex mt-2 flex-row align-items-center justify-content-center justify-content-lg-start">
            <p id="header-title">
              SERRA<span>TOUR</span>
            </p>
          </Col>
          <Col className="d-flex mt-2 align-items-center justify-content-center justify-content-lg-end">
            <div id="menu" className="n354">
              <ul id="menu-list" accessKey="">
                <li>
                  <a href="#pontos-turisticos">Pontos Turísticos</a>
                </li>
                <li>
                  <a href="#gastronomia">Gastronomia</a>
                </li>
                <li>
                  <a href="#newsletter">Newsletter</a>
                </li>
                <li>
                  <div className="elipse">
                    <img                      
                      src={userIcon}
                      alt=""
                    />
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
