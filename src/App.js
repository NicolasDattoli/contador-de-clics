import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from "./imagenes/freeCodeCamp-logo..png"
import { useState } from "react"

function App() {

  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0)
  };

  return (
    <div className="App">
      <div class="freecodecamp-logo-contendor">
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt="Logo de FreeCodeCamp"/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto="Click"
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
