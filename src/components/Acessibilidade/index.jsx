import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";
import iconeAcessibilidade from "../../assets/img/acessibilidadeIcon.png";
import iconeContrasteBranco from "../../assets/img/contrastIconWhite.png";

import "./style.css";

export function Acessibilidade() {
  const [outlineIsActive, setOutlineIsActive] = useState(false);
  const { darkThemeIsActive, handleTheme } = useContext(ThemeContext);
  
  function handleOutlineIsActive(event) {
    if (
      (event.nativeEvent instanceof KeyboardEvent && event.key === "Enter") ||
      event.nativeEvent instanceof PointerEvent
    ) {
      setOutlineIsActive(!outlineIsActive);
    }
  }

  useEffect(() => {
    const outlineStyle = "*:focus{outline: 5px solid var(--azul-primario)};";

    if (outlineIsActive) {      
      let element = document.createElement("style");
      element.innerHTML = outlineStyle;
      document.head.insertAdjacentElement("beforeend", element);
      return;
    }

    let elements = document.querySelectorAll("style");
    elements.forEach((element) => {
      if (element.innerHTML === outlineStyle) {
        element.remove();
      }
    });
  }, [outlineIsActive]);

  function handleFontSize(updateValue) {
    const selectors = "h1, h2, p, a, span, li, label, input, button";
    let elements = document.querySelectorAll(selectors);
    elements.forEach((element) => {
      let currentFontSize = window.getComputedStyle(element).fontSize;
      let newFontSize = parseInt(currentFontSize) + updateValue;
      element.style.fontSize = `${newFontSize}px`;
    })
  }

  return (
    <Container fluid id="secao-acessibilidade">
      <Row>
        <Col
          xl={6}
          className="d-flex justify-content-center justify-content-xl-between flex-wrap"
        >
          <nav id="atalhos-navegacao" className="n354">
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
          </nav>
        </Col>
        <Col
          xl={6}
          className="d-flex justify-content-center justify-content-xl-end gap-3 align-items-center mb-2 mb-xl-0"
        >
          <div className="p-2">
            <img
              id="icone-acessibilidade"
              src={iconeAcessibilidade}
              alt="Icone mundial de acessibilidade"
            />
          </div>
          <Form.Switch
            id="sw-20"
            type="switch"
            label="Moldurar elementos"
            aria-label="Recurso para moldurar elementos em foco"
            aria-checked={outlineIsActive}
            checked={outlineIsActive}
            onChange={(e) => handleOutlineIsActive(e)}
            onKeyDown={(e) => handleOutlineIsActive(e)}
          />
          <div id="container-botoes">
            <button
              id="diminuir"
              className="btnAce"
              aria-label="Diminuir tamanho do texto -A"
              onClick={() => handleFontSize(-1)}
            >
              -A
            </button>

            <button
              className="btnAce"
              aria-label="Aumentar tamanho do texto +A"
              onClick={() => handleFontSize(1)}
            >
              +A
            </button>

            <button
              className="btnAceC"
              arial-label="Ativar alto contraste"
              aria-pressed={darkThemeIsActive}
              onClick={handleTheme}
            >
              <img
                id="icone-contraste"
                src={iconeContrasteBranco}
                alt="Icone ilustrativo de alto contraste"
              />
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
