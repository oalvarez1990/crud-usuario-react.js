import React from 'react';

const Delete = ( {estadoDelete, cambiarEstadoDelete, remove} ) => {

   
    return (

    <>
       
       { estadoDelete &&
           <div className="modal-background">               
           <div className='form-modal'>
               <h1 className='prueba'><i className="fa-solid fa-triangle-exclamation"></i></h1>
               <p className='prueba2'>Eliminar Usuario</p>
               <p className='prueba3'>¿Seguro quieres eliminar el usuario?</p>
               <div className='prueba4'>                
                        <button className='button-24 lol' onClick={() => cambiarEstadoDelete(!estadoDelete)} >Cancelar</button>
                        <button className='button-24' onClick={()=>{
                            cambiarEstadoDelete(!estadoDelete)
                            remove()
                        }} >Eliminar</button>

               </div>
           </div>
       </div>
       }
    </>      
    );
};

export default Delete;