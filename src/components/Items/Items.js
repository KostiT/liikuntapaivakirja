import React from 'react';

import { Link } from 'react-router-dom';

import Liikuntakortti from '../Liikuntakortti/Liikuntakortti';
import Content from '../Content/Content';

import { FloatingButton } from '../buttons';

//Itemeistä vastaava komponentti
function Items(props) {

    let rows = props.data.map(invoice => {
        return (
          <Liikuntakortti data={invoice} key={invoice} />
        );
      }
    );

    return (
      <Content>
        {rows}
        <Link to="/add"><FloatingButton secondary>+</FloatingButton></Link>
      </Content>
    );
}

export default Items;