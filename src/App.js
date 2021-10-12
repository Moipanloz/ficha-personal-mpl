import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente/Componente';
import Propiedades from './components/Propiedades/Propiedades';
import Estado from './components/Estado/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional/RenderizadoCondicional';
import RenderizadoLista from './components/RenderizadoLista/RenderizadoLista';
import {EventosES6, EventosES7, EventosPlus } from './components/Eventos/Eventos';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* ----------- */}
        <hr />
        <div>
          <Componente mono="babuino"/>
        </div>
        <hr />
        <div>
          <Propiedades 
            listaPapas={["frita","asada","cocida"]} 
            numero={7} 
            boolean={false} 
            objeto={{nombre:"Pipo", mail:"pipomail.com"}} 
            elemento={<b>Andateeeee</b>}
            funsion={num => num * num}
            componente={<Componente mono="macaco" />} />
        </div>
        <hr />
        <div>
          <Estado />
        </div>
        <hr />
        <div>
          <RenderizadoCondicional />
        </div>
        <hr />
        <div>
          <RenderizadoLista />
        </div>
        <hr />
        <div>
          <EventosES6 />
        </div>
        <hr />
        <div>
          <EventosES7 />
        </div>
        <hr />
        <div>
          <EventosPlus />
        </div>
      </header>
    </div>
  );
}

export default App;
