import React from 'react';
import './FormLogin.css';

const FormLogin = () => {
   return (
      <div className="login-container">
         <div className="login-switch">
            <button className="login-button login-button-person button active">Personas</button>
            <button className="login-button login-button-company button">Empresas</button>
         </div>

         <form className="form">
            <div class="form-info">
               <h2>Iniciar Sesión</h2>
               <p>
                  ¡Buenas noches, <span>Bienvenido!</span>
               </p>
               <p>Ingrese sus credenciales</p>
            </div>

            <div className="form-card">
               <button className="form-card-selected button">Débito | Crédito</button>
               <button className="button">Tarjeta Débito BOD</button>
            </div>

            <div className="form-inputbox">
               <div className="form-input">
                  <div>
                     <img
                        src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/2x/external-credit-card-ecommerce-vitaliy-gorbachev-lineal-vitaly-gorbachev-1.png"
                        alt="credit-card"
                     />
                  </div>
                  <input placeholder="Número de Tarjeta" />
               </div>

               <div className="form-input">
                  <div>
                     <img
                        src="https://img.icons8.com/external-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto/2x/external-id-card-branding-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto.png"
                        alt="id-card"
                     />
                  </div>
                  <input placeholder="Cédula de Identidad" />
               </div>
            </div>

            <button
               type="submit"
               className="form-submit button"
            >
               Continuar
            </button>
         </form>

         <div className='login-lastinfo'>
            <div className='login-forgot'>
               <p>¿Olvidaste tu clave?</p>
            </div>

            <div className='login-security'>
               <p>
                  Tus datos se encuentran protegidos por nuestro certificado de seguridad digital
                  (SSL)
               </p>
               <div>
                  <img
                     src="https://d1rf5ggwyx9rx8.cloudfront.net/Images/Auth/getseal.gif"
                     alt="norton"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export { FormLogin };
