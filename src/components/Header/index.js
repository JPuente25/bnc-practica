import React from 'react';
import { getDate } from './getDate';
import './Header.css';

const Header = () => {
   const { fullDate } = getDate();

   return (
      <div className='header'>
         <div className='header-logo'>
            <img 
               src="https://d1rf5ggwyx9rx8.cloudfront.net/Images/BNC_Logo_min.png"
               className='header-img' />
         </div>
         <div className='header-date'>
            <p className='header-datetext'>{fullDate}</p>
         </div>
      </div>
   );
};

export { Header };
