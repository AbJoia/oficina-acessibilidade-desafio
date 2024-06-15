import { Card as CardBootstrap } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";
import {useContext} from 'react' 

import "./style.css";

export function Card({ dado, image }) {
  const {darkThemeIsActive} = useContext(ThemeContext);

  function getImageUrl(path) {
    return new URL(path, import.meta.url).href
  } 
  
  return (
    <CardBootstrap
      aria-label={dado?.titulo}
      tabIndex={0}
      style={{ width: "22rem" }}
      className="mt-3 mt-xl-0 card"
    >
      <CardBootstrap.Img className= {darkThemeIsActive ? "card_img  imagem-escala-cinza" : "card_img"}        
        variant="top"
        tabIndex={0}
        alt={dado?.imagem.alt}      
        src= {getImageUrl(image)}        
      />
      <CardBootstrap.Body>
        <CardBootstrap.Title className="titulo-card">
          {dado?.titulo}
        </CardBootstrap.Title>
        <div className="linha-card" />

        <CardBootstrap.Text  tabIndex={0}>{dado?.texto}</CardBootstrap.Text>
      </CardBootstrap.Body>
    </CardBootstrap>
  );
}
