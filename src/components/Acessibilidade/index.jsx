import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import iconeAcessibilidade from "../../assets/img/acessibilidadeIcon.png";
import iconeContrasteBranco from "../../assets/img/contrastIconWhite.png";
import {ThemeContext} from "../../context/ThemeContext";

import "./style.css";

export function Acessibilidade() {
  const {altoContraste, handleAltoContraste} = useContext(ThemeContext);
  const [outline, setOutline] = useState(false);

  function handleOutline(event) {
    if (
      (event.nativeEvent instanceof KeyboardEvent && event.key === "Enter") ||
      event.nativeEvent instanceof PointerEvent
    ) {
      setOutline(!outline);
    }
  }

  useEffect(() => {
    const outlineStyle = "*:focus{outline: 5px solid var(--azul-primario)};";    
    if(outline){
      var style = document.createElement("style");
      style.innerHTML = outlineStyle;
      document.head.insertAdjacentElement("beforeend", style);
      return;
    }

    var elements = document.querySelectorAll("style");
    elements.forEach((element) => {
      if(element.innerHTML === outlineStyle){
        element.remove();
      }
    })
  }, [outline])

  function handleFontSize(updateSize){
    const selectors = "h1, h2, p, a, span, li, label, input, button";
    var elements = document.querySelectorAll(selectors);
    elements.forEach((element) => {
      var size = getComputedStyle(element).fontSize;
      var value = parseFloat(size); 
      var newValue = value + updateSize;
      element.style.fontSize = `${newValue}px`;   
    })
  }

  return (
    <Container fluid id="secao-acessibilidade">
      <Row>
        <Col
          xl={6}
          className="d-flex justify-content-center justify-content-xl-between flex-wrap"
        >
          <nav role="navigation" id="atalhos-navegacao" className="n354">
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
              alt="Icone mundial de acessibilidade."
            />
          </div>
          <Form.Switch
            id="sw-20"
            type="switch"
            label="Modelar Elementos"
            aria-label="Ativar moldura aos elementos em foco"
            checked={outline}
            aria-checked={outline}
            onChange={(e) => handleOutline(e)}
            onKeyDown={(e) => handleOutline(e)}
          />
          <div id="container-botoes">
            <button
              role="button"
              aria-label="Diminuir Tamanho do Texto -A"
              id="diminuir"
              className="btnAce"
              onClick={() => handleFontSize(-1)}
            >
              -A
            </button>

            <button
              role="button"
              aria-label="Aumentar Tamanho do Texto +A"
              className="btnAce"
              onClick={() => handleFontSize(1)}
            >
              +A
            </button>

            <button
              role="button"
              aria-label="Ativar alto contraste"
              aria-pressed={altoContraste}
              className="btnAceC"
              onClick={handleAltoContraste}
            >
              <img
                id="icone-contraste"
                src={iconeContrasteBranco}
                alt="Icone de contraste"
              />
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
