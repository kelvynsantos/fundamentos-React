import React from 'react'; 
import Primeiro from './components/Primeiro' 
import ComParametro from './components/ComParametro' 
import compoFilhos from './components/compoFilhos' 
import Card from './components/layout/Card' 
import './App.css' 
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'; 
import CondicionalComIf from './components/CondicionalComIf';
 
export default (props) => (
    <div className='App'> 
      <Card titulo="Primeiro componente"> 
    <Primeiro/>
    </Card> 
    <Card titulo="Componente com Parametro"> 
    <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo"/> 
    <ComParametro titulo="Opa" subtitulo="Epa"/>
    </Card> 
    <Card titulo="Componentes com filhos"> 
    <compoFilhos>
         <ul> 
            <li>Erick</li> 
            <li>Carlos</li> 
            <li>Maria</li> 
            <li>Ana</li>
         </ul>
    </compoFilhos> 
    </Card>
    <Card titulo="Exercício X">Conteudo</Card> 
    <Card titulo="Repetição">
         <Repeticao></Repeticao> 
    </Card> 
    <Card titulo="Condicional V1"> 
    <Condicional numero={10}></Condicional>
    </Card> 
    <Card titulo="Condicional V2"> 
    <CondicionalComIf numero={11}></CondicionalComIf> 
    </Card>
{/*<h1>Olá React</h1>, JSX
<Primeiro />, 
<ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo"/> */} 
    {/* <compoFilhos> 
        <ul> 
            <ul> 
                 <li>Ana</li>
                 <li>Bia</li> 
                 <li>Carlos</li> 
                 <li>Daniel</li>
            </ul>        
        </ul>
    </compoFilhos> */}
</div>
);