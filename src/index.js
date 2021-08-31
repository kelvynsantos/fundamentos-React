import './index.css' 
import React from 'react' /* para se utilizar o JSX*/
import ReactDOM from 'react-dom' /*react-dom utiliza-se apenas dentro deste arquivo */
import Primeiro from './components/Primeiro' 
 
ReactDOM.render( 
    /*<h1>Olá React</h1>, JSX*/ 
    <Primeiro></Primeiro>,
    document.getElementById('root') /*onde quero renderizar,div root*/
)