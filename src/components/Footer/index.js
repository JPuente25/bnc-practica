import React from "react";
import { getDate } from "../Header/getDate";
import './Footer.css';

const Footer = () => {
   const { year } = getDate();
   return (
      <div class="footer">
         <p class="footer-p">
            {year} Banco Nacional de Crédito, C.A. Banco Universal. Todos los Derechos Reservados. RIF: J-30984132-7
         </p>
         <p class="footer-p--info">
            La información mostrada en este sitio es confidencial
         </p>
      </div>
   );
}

export { Footer };