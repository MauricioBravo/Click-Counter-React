import './App.css';
import Button from './components/Button.jsx';
import Contador from './components/Contador';
import logo from './images/logo-react.png';
import ButtonStyle from './styles/ButtonStyle.css';
import ContadorStyles from './styles/ContadorStyles.css'
function App() {

  const clicHandler = () => {
    console.log("Click hecho");
  }

  const resetCounter = () =>{
    console.log("reiniciar contador");
  }


  return (
    <div className="App">
      <div className='react-logo-contenedor'>
        <img className='react-logo'
          src={logo} 
          alt='Logo de react'/>
        
      </div>
      <Contador numClicks='5' />

      <div className='contenedor-contador'>
          <Button 
            text='Clic'
            isClickButton={true}
            clicHandler={clicHandler}
          />
          <Button
            text='Reset'
            isClickButton={false}
            clicHandler={resetCounter}
          />
      </div>
    </div>
  );
}

export default App;
