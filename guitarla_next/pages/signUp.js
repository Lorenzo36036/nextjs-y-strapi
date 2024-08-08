import React from 'react'; 
import signup from './../styles/signup.module.css';
import { useForm } from "react-hook-form";
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CREATE_USER = gql`
  mutation addUsuario($data: UsuarioInput!) {
    createUsuario(data: $data) {
      data {
        id
        attributes {
          user
          email
        }
      }
    }
  }
`;

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  const router = useRouter()  


  const onSubmit = async (formData) => {
    try {
      console.log('Submitting data:', formData); // Verifica los datos
      const response = await createUser({ variables: {  data : formData} });
      console.log(response.data);
      alert('Registro exitoso');
      router.push(`/login`)
    
    } catch (err) {
      console.error('Error en la mutación:', err);
      alert('Error en el registro');
    }
  };

  return (
    <div className={signup.divStyle}>
      <form className={signup.formStyle} onSubmit={handleSubmit(onSubmit)}>
        <h2 align="center">Sign up</h2>
        <input 
          {...register("user", { required: "Usuario es obligatorio" })} 
          type="text" 
          placeholder="usuario" 
        />
        {errors.user && <p>{errors.user.message}</p>}
        
        <input 
          {...register("email", { 
            required: "Email es obligatorio", 
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Email no es válido"
            } 
          })} 
          type="email" 
          placeholder="email" 
        />
        {errors.email && <p>{errors.email.message}</p>}
        
        <input 
          {...register("password", { required: "Contraseña es obligatoria" })} 
          type="password" 
          placeholder="password" 
        />
        {errors.password && <p>{errors.password.message}</p>}
        
        <Link href={`/login`}> Ya tienes cuenta?</Link>

        <button type="submit" disabled={loading}>Registrate</button>
        {error && <p>Error: {error.message}</p>}
      </form>
    </div>
  );
};

export default SignUp;
