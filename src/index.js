            import './index.css' 
            import React from 'react' /* para se utilizar o JSX*/
            import ReactDOM from 'react-dom' /*react-dom utiliza-se apenas dentro deste arquivo */
            // import Primeiro from './components/Primeiro' 
            // import ComParametro from './components/ComParametro' 
            import compoFilhos from './components/compoFilhos'
            
            ReactDOM.render( 
                <div> 
                {/*<h1>Olá React</h1>, JSX
                <Primeiro />, 
                <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo"/> */} 
                <compoFilhos> 
                    <ul> 
                        <li>Ana<li>
                        <li>Bia</li> 
                        </li>Daniel</li>
                        <li>Carlos</li> 
                    </ul>                
                </compoFilhos>
                </div>,
                document.getElementById('root')  
                /*onde quero renderizar,div root*/
            )