import React from 'react';
import { Link } from 'react-router-dom';
import {FiArrowRight} from 'react-icons/fi';
import '../style/global.css'
import '../style/pages/landing.css'
import logoImg from '../img/logo.svg';

function landing() {
    return( <div id="page-landing">
    <div className="content-wrapper">
      <img src={logoImg} alt="Happy Logo" />
      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças</p>
      </main>
      <div className="location">
        <strong>Cuiabá</strong>
        <p>Mato Grosso</p>
      </div>
      <Link to="/app" className="enter-app"><FiArrowRight size={26} color="rgba(259,259,259,1)"/></Link>
    </div>
  </div>);
}
export default landing;