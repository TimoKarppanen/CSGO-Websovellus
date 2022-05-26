import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


/* Juuri komponentti */

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));

/* Strictmode on työkalu jolla voidaan havaita potentiaalisia ongelmia aplikaatiossa. */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

