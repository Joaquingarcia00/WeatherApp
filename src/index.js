
import  React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import App from './components/appclima.js';
import Header from './components/header.js'
import './index.css'
ReactDOM.render((
  <BrowserRouter>
    <Header/>
    <App />
  </BrowserRouter>
), document.getElementById('root'))