import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormCustomHook = () => {

  const {username, email, password, onInputChange, onInputReset} = useForm( {

    username: '',
    email: '',
    password: ''

  });


  return (
    <>
    
    <h1>Custom Hook Form</h1>

    <hr />

    <input 
        type="text"  
        className='form-control' 
        placeholder='Username' 
        name='username' 
        value={username} 
        onChange={onInputChange}/>

    <input 
        type="email"  
        className='form-control mt-2' 
        placeholder='Email' 
        name='email' 
        value={email} 
        onChange={onInputChange}/>
        
        <input 
        type="password"  
        className='form-control mt-2' 
        placeholder='Contrasena' 
        name='password' 
        value={password}
        onChange={onInputChange}/> 

        <button onClick={onInputReset} className='btn btn-primary mt-2'>Reset</button>


    </>
  )
}
