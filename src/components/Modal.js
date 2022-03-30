import React from 'react';
import Form from './Form';

const Modal = ( {estado , cambiarestado, getuser, textButton} ) => {
    return (

    <> 
        {estado && 
            <div className='modal'>
                <div className='form-modal'>
                    <div className='header-form'>
                      <h1>Nuevo Usuario</h1>
                      <button onClick={() => cambiarestado(!estado)} ><i className="fa-solid fa-rectangle-xmark"></i></button>
                    </div>                 
                    <Form getuser = {getuser} estado= {estado} cambiarestado= {cambiarestado} textButton={textButton}  />
                </div>
                <div className='modal-background' onClick={() => {
                    cambiarestado(!estado)
                   
                    }} ></div>
            </div>
        }
    </> 
    );
};

export default Modal;