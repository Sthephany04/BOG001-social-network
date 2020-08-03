import { createUserByEmailAndPass, loginUserGoogle } from '../firebase/auth';

const signUp = () => {
  const view = `
    <section class="signUp container__form">
      <h1 class="container__form--title">
          Registrate
      </h1>
      <form id="formSignUp" class="form">
        <div class="form-group">
          <input id=" type="text" placeholder="username">
          <label for="name">Username</label>
        </div>
        <div class="form-group">
          <input id="email" type="email" placeholder="Correo">
          <label for="name">Correo</label>
        </div>
        <div class="form-group">
          <input id=" type="text" placeholder="Ciudad">
          <label for="name">Ciudad</label>
        </div>
        <div class="form-group loginPassword--container">
          <input id = "loginPassword" type="password" placeholder="Contraseña">
          <label for="name">Contraseña</label>
          <span class="eye__icon" id="eyeIcon"></span>
        </div>
        <button id="button" type="submit">Registrar</button>
      </form>
      <div class="signUp__google">
          <h3>o registrate con</h3>
          <h3>
          <a id="signupGoogle" href="#/..."><img class="google-icon" src="../assets/seo-and-web.png" alt=""></a>
          </h3>
      </div>
    </section>`;

  const container = document.createElement('div');
  container.innerHTML = view;

  const botonRegistro = container.querySelector('#formSignUp');
  const signupGoogle = container.querySelector('#signupGoogle');
  const eyeIcon = container.querySelector('#eyeIcon');
  const loginPassword = container.querySelector('#loginPassword');

  const createUser = () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('loginPassword').value;
    createUserByEmailAndPass(email, pass);
  };

  const mostrarContrasena = () => {
    if (loginPassword.type === 'password') {
      loginPassword.type = 'text';
      eyeIcon.classList.toggle('eyeblock__icon');
      eyeIcon.classList.toggle('eye__icon');
    } else {
      eyeIcon.classList.toggle('eyeblock__icon');
      eyeIcon.classList.toggle('eye__icon');
      loginPassword.type = 'password';
    }
  };

  signupGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginUserGoogle();
  });

  botonRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    createUser();
  });

  eyeIcon.addEventListener('click', mostrarContrasena);

  return container;
};

export default signUp;
