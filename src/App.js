import React from 'react';
import FormLogo from './assets/form-logo.png';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import './App.css';

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  senha: yup.string()
    .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Senha 8 caract, 1 maiúscula, 1 número e 1 caractere especial")
    .required("Senha obrigatória"),
  confirmarSenha: yup.string().oneOf([yup.ref('senha'), null], 'As senhas não coincidem').required("Campo obrigatório")
}).required();

export default function App() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    // mode: "onBlur",
  })

  function onSubmit(data) {
    console.log(data)
  }

  // console.log(errors)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <img src={FormLogo} alt="Form Logo" className="form-logo" />
      
      <label>
        Nome
        <input type="text" placeholder="Nome" {...register("name", { required: true })}/>
        <span>{errors.name?.message}</span>
      </label>

      <label>
        Email
        <input type="text" placeholder="Email" {...register("email", { required: true })}/>
      <span>{errors.email?.message}</span>
      </label>

      <label>
        Senha
        <input type="text" placeholder="Senha" {...register("senha", { required: true })}/>
        <span >{errors.senha?.message}</span>
      </label>

      <label>
        Confirmar Senha
        <input type="text" placeholder="Confirmar Senha" {...register("confirmarSenha", { required: true })}/>
        <span>{errors.confirmarSenha?.message}</span>
      </label>

      <button type="submit">Cadastrar</button>
    </form>
  );
}
// export default App;