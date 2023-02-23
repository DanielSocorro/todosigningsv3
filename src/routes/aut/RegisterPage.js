import React from 'react';
import { useHistory } from 'react-router-dom';

function RegisterPage() {
  const history = useHistory();

  function handleRegister() {
    // Lógica para registrar al usuario
    history.push('/login'); // Redirigir al usuario a la página de inicio de sesión después de registrarse
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        {/* Formulario para registrar al usuario */}
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export { RegisterPage };
