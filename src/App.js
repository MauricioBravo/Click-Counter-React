import './App.css';
import Button from './components/Button.jsx';
import logo from './images/logo-react.png'

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
