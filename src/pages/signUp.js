import { createUserByEmailAndPass } from '../firebase/auth';

const signUp = () => {
  const createUser = () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const city = document.getElementById('city').value;
    const username = document.getElementById('username').value;
    createUserByEmailAndPass(email, pass, city, username);
  };

  const view = `
    <section class='signUp container__form'>
      <h1 class='container__form--title'>
          Registrate
      </h1>
      <form id="formSignUp" class='form'>
        <div class="form-group">
          <input id='username' type='text' placeholder='Nombre de Usuario' required>
          <label for="username">Nombre de Usuario</label>
        </div>
        <div class="form-group">
          <input id='email' type='email' placeholder='Correo' required>
          <label for="email">Correo</label>
        </div>
        <div class="form-group">
          <input id='city' type='text' placeholder='Ciudad' required>
          <label for="city">Ciudad</label>
        </div>
        <div class="form-group loginPassword--container">
          <input id = "password" type='password' placeholder='Contraseña' required>
          <label for="password">Contraseña</label>
          <span class="eye__icon" id="eyeIcon"></span>
        </div>
        <button id="button" type='submit'>Registrar</button>
      </form>
      <div class = "signUp__google">
      <h3> ¿Ya tienes cuenta?</h3>
      <a href = "#/login" id="" class="login__register">Inicia Sesion</a>
      </div>
      </div>
    </section>`;

  const container = document.createElement('div');
  container.innerHTML = view;

  const botonRegistro = container.querySelector('#formSignUp');
  botonRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    createUser();
  });
  const eyeIcon = container.querySelector('#eyeIcon');
  const loginPassword = container.querySelector('#password');

  const mostrarContrasena = () => {
    if (loginPassword.type === 'password') {
      loginPassword.type = 'text';
      eyeIcon.classList.toggle('eyeblock__icon');
      eyeIcon.classList.toggle('eye__icon');
    } else {
      loginPassword.type = 'password';
      eyeIcon.classList.toggle('eyeblock__icon');
      eyeIcon.classList.toggle('eye__icon');
    }
  };
  eyeIcon.addEventListener('click', mostrarContrasena);

  return container;
};

export default signUp;
