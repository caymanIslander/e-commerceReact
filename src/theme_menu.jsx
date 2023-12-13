import { useState, useEffect } from 'react'
import "./header.css"
import menubar from "./assets/menu-bar.png"
import { animated, useSpring } from '@react-spring/web'




function Theme(){
    const [isOpen, SetIsOpen] = useState(false);
    const [selectedTheme, setselectedTheme] = useState(localStorage.getItem('theme') || 'Dark');
    
    
    
    
    
    const toggle=()=>{
        SetIsOpen(!isOpen)
    }
    
    const selectCurrency = (currency) => {
        setselectedTheme(currency)
        SetIsOpen(false)
    }
    useEffect(()=>{
        localStorage.setItem("theme", selectedTheme)
    }, [selectedTheme])
    
    return(
        <div className='currency-container'>
            <div className='selected-currency' onClick={toggle}>
                {selectedTheme || 'USD'}
            </div>
            {isOpen && (
                <ul className='currency-list'>
                    {currencyList.map((currency, index)=>(
                        <li key={index} onClick={()=> selectCurrency(currency)}>{currency}</li>
                    ))}
                </ul>
            )}
        </div>

    );

}
export default Theme;