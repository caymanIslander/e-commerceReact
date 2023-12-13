import React from 'react';

const CurrencyContext = React.createContext({
    currency: 'USD',
    setCurrency: () => {},
});

export default CurrencyContext;