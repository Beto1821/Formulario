import React from 'react';
import FormLogo from './assets/form-logo.png';
import { useForm } from "react-hook-form"

import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <img src={FormLogo} alt="Form Logo" className="form-logo" />
      
      <label>
        Nome
        <input type="text" placeholder="Nome" {...register("Name", { required: true })}/>
        {errors.Name && <span>Campo obrigatório</span>}
      </label>

      <label>
        Email
        <input type="text" placeholder="Email" {...register("Email", { required: true })}/>
      </label>

      <label>
        Senha
        <input type="text" placeholder="Senha" {...register("Senha", { required: true })}/>
      </label>

      <label>
        Confirmar Senha
        <input type="text" placeholder="Confirmar Senha" {...register("ConfirmarSenha", { required: true })}/>
      </label>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default App;
