import React from 'react';
import FormLogo from './assets/form-logo.png';

import './App.css';

function App() {
  return (
    <form>
      <img src={FormLogo} alt="Form Logo" className="form-logo" />
      
      <label>
        Nome
        <input type="text" placeholder="Name" required />
      </label>

      <label>
        Email
        <input type="text" placeholder="Email" required />
      </label>

      <label>
        Senha
        <input type="text" placeholder="Senha" required />
      </label>

      <label>
        Confirmar Senha
        <input type="text" placeholder="Confirmar Senha" required />
      </label>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default App;
