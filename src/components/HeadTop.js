import React from 'react';


const HeadTop = ( {estado, cambiarestado, setTextButton} ) => {

        
    return (        
        <div className='head'>              
        <h1>Usuarios</h1>
        <div>
         <button className='button-43' onClick={() => {
             cambiarestado(!estado)
             setTextButton('Crear Usuario')
             }}>
             <i className="fa-solid fa-plus icon-more-user"></i>
             <p>Agregar Usuario</p> 
         </button>
        </div>
              
     </div>
    );
};

export default HeadTop;
