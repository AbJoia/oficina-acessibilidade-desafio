import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import iconeAcessibilidade from "../../assets/img/acessibilidadeIcon.png";
import iconeContrasteBranco from "../../assets/img/contrastIconWhite.png";
import { ThemeContext } from "../../context/ThemeContext";

import "./style.css";

export function Acessibilidade() {
  const { altoContraste, handleSetAltoContraste } = useContext(ThemeContext);
  const [acessibilityIsOpen, setAcessibilityIsOpen] = useState(false);
  const [outlineIsActive, setOutlineIsActive] = useState(false);
  const selectors = "h1, h2, p, a, span, li, label, input, button";
  const outlineStyle =
    "*:focus{outline: 5px solid var(--azul-primario) !important};";

  useEffect(() => {
    if (outlineIsActive) {
      const styleTag = document.createElement("style");
      styleTag.innerHTML = outlineStyle;
      document.head.insertAdjacentElement("beforeend", styleTag);
      return;
    }

    var elements = document.querySelectorAll("style");
    elements.forEach((element) => {
      if (element.innerHTML === outlineStyle) {
        element.remove();
      }
    });
  }, [outlineIsActive]);

  useEffect(() => {
    if (altoContraste) {
      document.documentElement.style.setProperty(
        "--backgroud-color",
        "var(--preto-primario)"
      );
      document.documentElement.style.setProperty(
        "--font-color",
        "var(--branco-primario)"
      );
      document.documentElement.style.setProperty(
        "--font-color-variant",
        "var(--preto-primario)"
      );
      document.documentElement.style.setProperty(
        "--backgroud-section-color",
        "var(--preto-primario)"
      );
      document.documentElement.style.setProperty(
        "--backgroud-section-color-variant",
        "var(--preto-primario)"
      );
      document.documentElement.style.setProperty(
        "--title-color",
        "var(--branco-primario)"
      );
      document.documentElement.style.setProperty(
        "--title-color-variant",
        "var(--amarelo-primario)"
      );
      document.documentElement.style.setProperty(
        "--hover-color",
        "var(--amarelo-primario)"
      );
      document.documentElement.style.setProperty(
        "--accessibility-background-color",
        "var(--preto-secundario)"
      );
      document.documentElement.style.setProperty(
        "--button-color",
        "var(--amarelo-primario)"
      );
      return;
    }

    document.documentElement.style.setProperty(
      "--backgroud-color",
      "var(--branco-primario)"
    );
    document.documentElement.style.setProperty(
      "--font-color",
      "var(--preto-primario)"
    );
    document.documentElement.style.setProperty(
      "--font-color-variant",
      "var(--branco-primario)"
    );
    document.documentElement.style.setProperty(
      "--backgroud-section-color",
      "var(--branco-primario)"
    );
    document.documentElement.style.setProperty(
      "--backgroud-section-color-variant",
      "var(--branco-secundario)"
    );
    document.documentElement.style.setProperty(
      "--title-color",
      "var(--verde-primario)"
    );
    document.documentElement.style.setProperty(
      "--title-color-variant",
      "var(--preto-primario)"
    );
    document.documentElement.style.setProperty(
      "--hover-color",
      "var(--verde-primario)"
    );
    document.documentElement.style.setProperty(
      "--accessibility-background-color",
      "var(--cinza-claro)"
    );
    document.documentElement.style.setProperty(
      "--button-color",
      "var(--verde-escuro)"
    );
    return;
  }, [altoContraste]);

  function handleSetOutline(event) {
    if (
      (event.nativeEvent instanceof KeyboardEvent && event.key === "Enter") ||
      event.nativeEvent instanceof PointerEvent
    ) {
      setOutlineIsActive(!outlineIsActive);
      return;
    }
  }

  function handleFontSize(updateValue) {
    var elements = document.querySelectorAll(selectors);
    elements.forEach((element) => {
      var value = window
        .getComputedStyle(element, null)
        .getPropertyValue("font-size")
        .split("px")[0];
      element.style.fontSize = +value + updateValue + "px";
    });
  }

  function handleTheme() {
    handleSetAltoContraste(!altoContraste);
    return;
  }

  return (
    <Container
      fluid
      id="secao-acessibilidade"     
      aria-label="Seção de configurações de acessibilidade."
    >
      <Container>
        <Row>
          <Col className="d-flex justify-content-center justify-content-xl-start align-items-center">
            <img
              id="icone-acessibilidade"              
              src={iconeAcessibilidade}             
            />
            <div
              id="botao-acessibilidade"              
              onClick={(e) => setAcessibilityIsOpen(!acessibilityIsOpen)}
            >
              Acessibilidade{" "}
              {acessibilityIsOpen ? <BiUpArrow /> : <BiDownArrow />}
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className={acessibilityIsOpen ? "d-block" : "d-none"}>
          <Col className="d-flex justify-content-center justify-content-xl-between flex-wrap">
            <div className="p-2">
              <Form.Switch 
                id="sw-20"
                type="switch"
                label=""
                checked={outlineIsActive}              
                onChange={(e) => handleSetOutline(e)}
                onKeyDown={(e) => handleSetOutline(e)}
              />
              <div
                id="container-botoes"
                className="d-flex justify-content-xl-start justify-content-center gap-2 mb-2 mt-2"
              >
                <div
                  className="btnAce"
                  onClick={() => handleFontSize(-1)}
                >
                  -A
                </div>

                <div
                  className="btnAce"                  
                  onClick={() => handleFontSize(1)}
                >
                  +A
                </div>

                <div
                  className="btnAceC"                  
                  onClick={handleTheme}
                >
                  <img
                    id="icone-contraste"
                    src={iconeContrasteBranco}
                    alt="Icone para alterar contraste."
                  />
                </div>
              </div>
            </div>
            <div id="atalhos-navegacao" className="n354">
              <ul
                tabIndex={0}
                aria-label="Navegação por atalhos no teclado"
                className="d-flex justify-content-center mt-3 flex-wrap gap-2"
              >
                <li>
                  <a href="#pontos-turisticos">Pontos Turísticos[1]</a>
                </li>
                <li>
                  <a href="#gastronomia">Gastronomia[2]</a>
                </li>               
                <li>
                  <a href="#form-hotel">Buscar Hotéis[3]</a>
                </li>
                <li>
                  <a href="#newsletter">Newsletter[4]</a>
                </li>
                <li>
                  <a href="#footer">Rodapé[5]</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
