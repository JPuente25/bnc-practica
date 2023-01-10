import React from "react";

const MediaLogo = ({ platform, img, name }) => {
   return (
      <img 
         src={img} 
         alt={`${platform}: ${name}`}/>
   );
};

export { MediaLogo };