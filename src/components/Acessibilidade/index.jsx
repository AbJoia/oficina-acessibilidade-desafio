import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import iconeAcessibilidade from "../../assets/img/acessibilidadeIcon.png";
import iconeContrasteBranco from "../../assets/img/contrastIconWhite.png";

import "./style.css";

export function Acessibilidade() {
  return (
    <Container fluid id="secao-acessibilidade">
      <Row>
        <Col
          xl={6}
          className="d-flex justify-content-center justify-content-xl-between flex-wrap"
        >
          <div id="atalhos-navegacao" className="n354">
            <ul className="d-flex justify-content-center mt-3 flex-wrap gap-2">
              <li>
                <a href="#main">Ir para conteúdo[1]</a>
              </li>
              <li>
                <a href="#menu">Ir para menu[2]</a>
              </li>
              <li>
                <a href="#footer">Ir para rodapé[3]</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col
          xl={6}
          className="d-flex justify-content-center justify-content-xl-end gap-3 align-items-center mb-2 mb-xl-0"
        >
          <div className="p-2">
          <img
            id="icone-acessibilidade"
            src={iconeAcessibilidade}
            alt=""
          />
          </div>
          <Form.Switch
            id="sw-20"
            type="switch"
            label=""
            checked={false}
            onChange={(e) => alert("Método não implementado...")}
            onKeyDown={(e) => alert("Método não implementado...")}
          />
          <div id="container-botoes">
            <div
              className="btnAce" 
              onClick={() => alert("Método não implementado...")}
            >
              -A
            </div>

            <div
              className="btnAce"
              onClick={() => alert("Método não implementado...")}
            >
              +A
            </div>

            <div
              className="btnAceC" 
              onClick={() => alert("Método não implementado...")}
            >
              <img
                id="icone-contraste"
                src={iconeContrasteBranco}
                alt=""
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
