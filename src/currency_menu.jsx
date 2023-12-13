import { useState, useEffect, useContext } from 'react'
import "./header.css"
import menubar from "./assets/menu-bar.png"
import { animated, useSpring } from '@react-spring/web'
import CurrencyContext from './currency-context';

function Currency(){
    const {setCurrency} = useContext(CurrencyContext);
    const [isOpen, SetIsOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState(localStorage.getItem('currency') || 'USD');

    let currencyList =  ['USD', 'AUD', 'CAD']
    
    const toggle=()=>{
        SetIsOpen(!isOpen)
    }

    const selectCurrency = (currency) => {
        setSelectedCurrency(currency)
        setCurrency(currency)
        SetIsOpen(false)
    }

    useEffect(()=>{
        localStorage.setItem("currency", selectedCurrency)
    }, [selectedCurrency])
    
    return(
        <div className='currency-container'>
            {!isOpen && (
                <div className='selected-currency' onClick={toggle}>
                    {selectedCurrency || 'USD'}
                </div>
            )}
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

export default Currency;
    
   