import React, { useState } from 'react';
import './styles.css';



const tabs = ['About', 'Experience', 'Projects', 'Contact'];

function Header(){

    const [active, setActive] = useState(tabs[0]);
    return (
      
    <div className="NavBar">   
     <ul className="Headerlist">   
       {tabs.map(tab => (
         <li
         key={tab}
         active={active === tab}
         onClick={() => setActive(tab)}
         >
           
             {tab}
         </li>
       ))} 
     </ul> 
    </div> 
    )
}


export default Header;