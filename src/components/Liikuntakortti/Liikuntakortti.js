//Liikuntakortin logiikka on tässä

import React from 'react';
import moment from 'moment';
import './Liikuntakortti.css';

function Liikuntakortti(props) {

    let kirjauspäivä = moment(props.data.kirjauspäivä);
 
   
    return (
     
      <div className="liikuntakortti">
        <div>
          <div>Urheilulaji: {props.data.tyyppi}</div>
          <div>Aikaa käytetty: {props.data.aika} h</div>
        </div>
        <div>
          <div>Merkkauspäivä: {kirjauspäivä.format("D.M.Y")}</div>     
        </div>
        <div>
          <div>Liikuntapaikka: {props.data.saaja}</div>
        </div>
      </div>
    );  
}

export default Liikuntakortti;