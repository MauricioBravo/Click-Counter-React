import React from 'react';

function Button({text, isClickButton, clicDriver}){
  
  return(
    <button
      className={ isClickButton ? 'click-button' : 'reset-button' }
      onClick={clicDriver}> 
      {text}
    </button>
  );
}

export default Button;