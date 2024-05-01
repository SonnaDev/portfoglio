// eslint-disable-next-line no-unused-vars
import React from "react";



function Header(){
     return(
        // eslint-disable-next-line react/no-unescaped-entities
        <div className="main">
           <h1 className="description">Sviluppo web innovativo su misura per aziende.</h1>
           <h2 className="description" id="descr">Offriamo servizi di progettazione, sviluppo e manutenzione di siti web e applicazioni.<br></br>Garantendo qualità, innovazione e supporto continuo.</h2>
           {/* <img src="./src/assets/img-2.jpg" alt="main" id="img"/> */}
           <button id="portfoglio-btn">
            <a href="#portfoglio">Portfoglio</a>
           </button>
           <button>
            <a href="" id="span">Servizi</a>
           </button>
        </div>
    
        
     )
}

export default Header;