import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
  {/**import { FirstApp } from './FirstApp';**/}

import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/**<FirstApp title="Hola soy Ivan" subtitle="Esto es un subtitulo" number={2008}/>**/}
        <CounterApp value={ 20 } />
    </React.StrictMode>
);
