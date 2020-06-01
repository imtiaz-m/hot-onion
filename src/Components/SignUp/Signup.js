import React from 'react';
import { useForm } from "react-hook-form";
import logo from '../../images/logo.png';
import './Signup.css'

const Signup = () => {
    const { register, handleSubmit ,errors} = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <div className="signup-container">
          
           
     <div className="register">     
         <img src={logo} alt=""/>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input name="name" ref={register({ required: true })} placeholder="Name" />
      {errors.name && <span>Name is required</span>}
      
      <input name="email" ref={register({ required: true })} placeholder="Email"/>
      {errors.email && <span>Email is required</span>}

      <input type="password" ref={register({ required: true })}placeholder="Password" />
      {errors.password && <span>Password is required</span>}

      <input type="password" ref={register({ required: true })} placeholder="Confirm Password"/>
      {errors.confirmPassword && <span>Password Not Match</span>}
      
      <input type="submit" />
    </form>
    </div> 
        </div>
          );
} ;


export default Signup;