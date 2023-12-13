import { useState } from 'react'
import "./header.css"
import menubar from "./assets/menu-bar.png"
import { animated, useSpring } from '@react-spring/web'
import Currency from './currency_menu'

function Options() {
    
  

  return (
   <>
        <div className='options-container'>
            <ul className='options-list'>
               <Currency/>
            </ul>
        </div>  
        
   </>
  )
}

export default Options;
