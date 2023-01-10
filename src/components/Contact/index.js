import React from "react";
import { socialMediaImgDB } from "../Aside/socialMediaImgDB";
import { MediaLogo } from "../MediaLogo";
import './Contact.css';

const Contact = () => {
   return (
      <div className="contact-container">
         <div className="contact-phone">
            <div className="contact-phone-img">
               <img src="https://d1rf5ggwyx9rx8.cloudfront.net/Images/Auth/004.png"/>
            </div>
            <div className="contact-phone-p">
               <p>Centro de Atención al Cliente BNC: 24 horas, los 7 días de la semana.</p>
               <p>Área Metropolitana (0212-597-50-00) - Interior del país 0500-BNC5000 (262500)</p>
            </div>
         </div>

         <div className="contact-line"></div>

         <div className="contact-media">
            <p className="contact-media-p">Síguenos por nuestras redes:</p>
            
            <div className="contact-mediabox">
               {socialMediaImgDB.map(item => 
                  <MediaLogo key={item.name} {...item}/>)}
            </div>
         </div>
      </div> 
   );
}

export { Contact };

         // <div classname="contact-line">
         //    <div>
         //    <p>Vayalo</p>
         //    <p>Vayalo</p>

         //    </div>
         // </div>