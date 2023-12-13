import { useState } from 'react'
import "./header.css"
import menubar from "./assets/menu-bar.png"
import { animated, useSpring } from '@react-spring/web'
import Options from "./options"
import react from './assets/react.svg'

function Item({name, price, image}) {

  return (
   <>
    
    <img src={image}></img>
    <h3>{name}</h3>
    <h4>{price}</h4>

   </>
  )
}

export default Item;
