import { useState, useEffect, useContext } from 'react'
import "./header.css"
import menubar from "./assets/menu-bar.png"
import { animated, useSpring } from '@react-spring/web'
import Options from "./options"
import Item from './item'
import react from './assets/react.svg'
import CurrencyContext from './currency-context';
import axios from 'axios';

function Store() {
    const { currency } = useContext(CurrencyContext);
    const items = [
        { price: 1, name: "apple", image: react },
        { price: 1, name: "banana", image: react },
        { price: 1 , name: "mango", image: react },
    ];

    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    })
    const [selectedCurrency, setSelectedCurrency] = useState(localStorage.getItem('currency') || 'USD');
    const [conversionRate, setConversionRate] = useState(1);
    useEffect(() => {
      console.log(selectedCurrency);
      setSelectedCurrency(localStorage.getItem('currency') || 'USD');
  }, []);
    
    useEffect(() => {
        const fetchConversionRate = async () => {
            try {
                const apiKey = '';
                const base = 'USD';
                const response = await axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`);
                setConversionRate(response.data.rates[selectedCurrency]);
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    console.error('Received 403 error. Check your API key and permissions.');
                } else {
                    console.error('Failed to fetch conversion rate', error);
                }
            }

        };

        fetchConversionRate();
    }, [selectedCurrency]);
    
    return (
        <animated.div className='store-container' style={fade}>
            <div className='items-container'>
                {items.map((item, index) => (
                    <Item key={index} price={item.price * conversionRate} name={item.name} image={item.image} />
                ))}
            </div>
        </animated.div>
    )
}

export default Store;
