import React, { useEffect, useState } from "react";
import "./nav.css";

const Nav = () => {

  const [ pikachu, getPiKachu ] = useState([]);

  useEffect(() => {
    getDatos();
  }, []);

  const getDatos = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/25/`);
    console.log(response);
    const datos = await response.json();
    console.log(datos)
    getPiKachu([datos])
  }
//sprites.back_default
  return(
  <div>
    {
      pikachu.map(item => {
        console.log("henry")
        console.log(item.sprites.back_female)
        return <img src={item.sprites.back_female} key={item.id} alt="yurien"/>
      })
    }
      <nav className="nav">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png" alt="logo"/>
      <ul>
        <li>hiran</li>
        <li>henry</li>
        <li>rudys</li>
        <li>hiran</li>
        <li>henry</li>
        <li>rudys</li>
      </ul>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </div>
  )
}

export default Nav;