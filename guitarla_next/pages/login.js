import React from 'react';
import signup from './../styles/signup.module.css';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const onSubmit = async (formData) => {
    try {
      const res = await axios.post(`/api/auth/login`, formData);
      console.log(res) 
      
      if(res.data.token){
        localStorage.setItem(`Token`,res.data.token)
        router.push('/');
      }


    } catch (err) {
      console.error('Error en la mutación:', err);
      alert('Error en el login');
    }
  };

  return (
    <div className={signup.divStyle}>
      <form className={signup.formStyle} onSubmit={handleSubmit(onSubmit)}>
        <h2 align="center">Login</h2>
        <input 
          {...register("email", { required: "Usuario es obligatorio" })} 
          type="email" 
          placeholder="email" 
        />
        {errors.identifier && <p>{errors.identifier.message}</p>}
        
        <input 
          {...register("password", { required: "Contraseña es obligatoria" })} 
          type="password" 
          placeholder="password" 
        />
        {errors.password && <p>{errors.password.message}</p>}
          
        <Link href={`/signUp`}>No tienes cuenta?</Link>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
