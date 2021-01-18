import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/pages/signup.css';

import logoImg from '../images/nnvoo.png';

function Signup () {
    return (
      <div id="page-landing">
        <div className="content-wrapper">
          
          <main>
            <img src={logoImg} alt="Futuro"/>
          </main>
  
          <div className="location">
            
          </div>
  
          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color= "rbga(0, 0, 0, 0.6)" />
          </Link>
  
        </div>
      </div>
    );
}

export default Signup;