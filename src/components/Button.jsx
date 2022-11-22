import React from 'react';

function Button({text, isClickButton, clicHandler}){
  
  return(
    <button
      className={ isClickButton ? 'click-button' : 'reset-button' }
      onClick={clicHandler}> 
      {text}
    </button>
  );
}

export default Button;