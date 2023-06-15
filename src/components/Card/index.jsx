import { Card as CardBootstrap } from "react-bootstrap";

import "./style.css";

export function Card({ dado, image }) {

  function getImageUrl(path) {
    return new URL(path, import.meta.url).href
  } 
  
  return (
    <CardBootstrap
      aria-label=""
      style={{ width: "22rem" }}
      className="mt-3 mt-xl-0 card"
    >
      <CardBootstrap.Img className="card_img"        
        variant="top"
        src= {getImageUrl(image)}
        alt={dado?.imagem.alt}
      />
      <CardBootstrap.Body>
        <CardBootstrap.Title className="titulo-card">
          {dado?.titulo}
        </CardBootstrap.Title>
        <div className="linha-card" />

        <CardBootstrap.Text>{dado?.texto}</CardBootstrap.Text>
      </CardBootstrap.Body>
    </CardBootstrap>
  );
}
