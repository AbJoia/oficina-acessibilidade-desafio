import { Container, Row, Col } from "react-bootstrap";
import { Card } from "../Card";

import "./style.css";

import museuImperial from "../../assets/img/museuImperial.jpg";
import palacioDeCristal from "../../assets/img/palacioDeCristal.jpg";
import serraDosOrgaos from "../../assets/img/serraDosOrgaos.jpg";
import vilastgallen from "../../assets/img/vilastgallen.jpg";
import gourmet from "../../assets/img/gourmet.jpg";
import feiraDeguste from "../../assets/img/feiraDeguste.jpg";

export function Secao({
  id,
  titulo,
  descricao,
  backgroundColor,
  dados  
}) {

  const images = [
    museuImperial,
    palacioDeCristal,
    serraDosOrgaos,
    vilastgallen,
    gourmet,
    feiraDeguste,
  ];

  return (
    <Container
      fluid
      className="secao-container p-5"
      style={{ backgroundColor: backgroundColor }}
    >
      <Container>
        <Row>
          <Col>
            <h2 id={id}>
              {titulo}
            </h2>
            <div className="linha" />
            <p>{descricao}</p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center justify-content-lg-between mt-2 flex-wrap">
            {dados?.map((dado, index) => {
              let imgUrl = images.filter(i => i.includes(dado.imagem.nome))           
              return <Card key={index} dado={dado} image={imgUrl[0]}/>;
            })}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
