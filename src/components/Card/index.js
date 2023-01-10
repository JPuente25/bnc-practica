import React from "react";
import './Card.css';

const Card = ({ i, img, title, text }) => {
   return (
      <article className="card-box">
         <div className="card-titlebox">
            <img className="card-icon" src={img} />
            <h4 className="card-title">{title}</h4>
         </div>
         <div className="card-textbox">
            <p className="card-text">{text}</p>
               <h3 className="card-clickhere">HAZ CLIC AQUÍ</h3>
         </div>
      </article>
   );
}

export { Card };