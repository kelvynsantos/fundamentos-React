            import './index.css' 
            import React from 'react' /* para se utilizar o JSX*/
            import ReactDOM from 'react-dom' /*react-dom utiliza-se apenas dentro deste arquivo */
            import Primeiro from './components/Primeiro' 
            // import ComParametro from './components/ComParametro' 
            // import compoFilhos from './components/compoFilhos' 
            import Card from './components/layout/Card'
            
            ReactDOM.render( 
                <div>  
                    <Card titulo="Primeiro componente"> 
                    <Primeiro />
                    </Card> 
                    <Card titulo="Exercício X"> 
                        conteudo
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
                </div>,
                document.getElementById('root')  
            )