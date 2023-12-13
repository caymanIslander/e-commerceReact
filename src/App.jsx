import React, { useState } from 'react';
import CurrencyContext from './currency-context';
import Store from './store';
import CurrencyMenu from './currency_menu';
import Header from './header'; // Import your Header component

function App() {
  const [currency, setCurrency] = useState('USD'); // Default currency

  return (
    <>
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
    <Header /> 
    
      <Store />
    </CurrencyContext.Provider>
    </>
  );
}

export default App;