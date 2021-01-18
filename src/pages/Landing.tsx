import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/pages/landing.css';

import logoImg from '../images/nnvoo.png';

function Landing () {
    return (
      <div id="page-landing">
        <div className="content-wrapper">
          
          
          <main>
            <img src={logoImg} alt="Futuro"/>
          </main>
  
          <div className="sub">
            <strong>Chega Mais!</strong>
          </div>
          <div className="sub1">
            <strong>Chega Mais!</strong>
          </div>
  
          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color= "rbga(0, 0, 0, 0.6)" />
          </Link>
  
        </div>
      </div>
    );
}

export default Landing;