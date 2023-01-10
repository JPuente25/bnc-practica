import React from "react";
import { cardsDB } from "../Card/CardsDB";
import { Card } from "../Card";
import { Contact } from "../Contact";
import './Aside.css';

const Aside = () => {
   return (
      <React.Fragment>
         <div className="aside-container">
            <div className="aside-title-box">
               <h1 className="aside-title">EN UN CLIC</h1>
               <p className="aside-title--p">Realiza tus operaciones con seguridad, todos los días del año y desde donde te encuentres.</p>
            </div>

            <div className="aside-cardbox">
               {cardsDB.map((card) => 
                  <Card key={card.title} {...card}/> )}
            </div>

            <Contact />
         </div>
      </React.Fragment>
   );
}

export { Aside };