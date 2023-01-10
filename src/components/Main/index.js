import React from "react";
import { FormLogin } from "../FormLogin";
import { Aside } from "../Aside";
import './Main.css'


const Main = () => {
   return (
      <div className="main-container">
         <section className="form-section">
            <FormLogin />
         </section>
         <section className="aside-section">
            <Aside />
         </section>
      </div>
   );
}

export { Main };