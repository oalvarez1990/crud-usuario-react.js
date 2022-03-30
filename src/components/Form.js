import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Form = ( {getuser, getUser, estado, cambiarestado, textButton, listUser , stateEdit, changeStateEdit} ) => {
      
    const [ first_name, setFirstName ] = useState("")
    const [ last_name, setLastName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ birthday, setBirthday ] = useState("") 

    

   const remove = () =>{
    getuser()
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setBirthday("");
   } 

   useEffect(() => {
         
    if ( listUser ) {
        setFirstName( listUser.first_name )
        setLastName( listUser.last_name )
        setEmail( listUser.email )
        setPassword( listUser.password )
        setBirthday( listUser.birthday ) 
        console.log(listUser.id)       
    }
    
},[ listUser ])

 

   const submit = e=>{
      
    e.preventDefault()   

    const objetoInfo = {
        first_name,
        last_name,
        email,
        password,
        birthday
    }

    if (listUser) {
        axios.put(`https://users-crud1.herokuapp.com/users/${listUser.id}/`, objetoInfo)
         .then( () => {
             getUser()
         } )
         
         changeStateEdit(!stateEdit)
    }else{

        axios.post('https://users-crud1.herokuapp.com/users/', objetoInfo) 
     .then(() => {
        remove()        
     }) 
     
     cambiarestado(!estado)

    }
      
    
 
   }

  
   
    return (
        <div>
            
            <form  onSubmit={submit} className='form-users' >
                <div className='name'>                    
                    <label htmlFor=""><i className="fa-solid fa-user"></i></label>
                    <input 
                        type="text" 
                        placeholder='Nombre'
                        onChange={ e => setFirstName(e.target.value) }
                        value={first_name}
                        required
                    />
                    <input 
                        className='input-name-2'
                        type="text"
                        placeholder='Apellidos'
                        value={last_name}
                        onChange={ e => setLastName(e.target.value) }
                    />
                </div>

                <div className='email'>
                    <label htmlFor=""><i className="fa-solid fa-envelope"></i></label>
                    <input 
                        type="email" 
                        placeholder='Email'
                        onChange={ e => setEmail(e.target.value) }
                        value = {email}
                        required
                    />
                </div>

                <div className='email'>
                    <label htmlFor=""><i className="fa-solid fa-lock"></i></label>
                    <input 
                        type="password"
                        placeholder='Contraseña'
                        onChange={ e => setPassword(e.target.value) }
                        value = {password}
                        required
                    />
                </div>

                <div className='email'>
                    <label htmlFor=""><i className="fa-solid fa-calendar"></i></label>
                    <input 
                        type="date"
                        placeholder='Fecha de nacimiento'
                        onChange={ e => setBirthday(e.target.value) }
                        value = {birthday}
                        required 
                    />
                </div>
                 
                <div className='button-submit'>
                   <button className='button-33' > {textButton} </button>
                </div>        

            </form>

        </div>
    );
};

export default Form;