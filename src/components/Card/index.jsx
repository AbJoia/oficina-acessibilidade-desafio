import {useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Card as CardBootstrap } from "react-bootstrap";

import "./style.css";

export function Card({ dado, image }) {
  const {altoContraste} = useContext(ThemeContext);

  function getImageUrl(path) {
    return new URL(path, import.meta.url).href
  } 
  
  return (
    <CardBootstrap
      //aria-label={dado?.titulo}
      style={{ width: "22rem" }}
      className="mt-3 mt-xl-0 card"
    >
      <CardBootstrap.Img className={altoContraste? "imagem-escala-cinza card_img" : "card_img"}        
        variant="top"
        src= {getImageUrl(image)}
        alt={dado?.imagem.alt}
      />
      <CardBootstrap.Body>
        <CardBootstrap.Title className="titulo">
          {dado?.titulo}
        </CardBootstrap.Title>
        <div className="linha-card" />

        <CardBootstrap.Text >{dado?.texto}</CardBootstrap.Text>
      </CardBootstrap.Body>
    </CardBootstrap>
  );
}
