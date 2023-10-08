import React from 'react';

import Content from '../Content/Content';
import ItemForm from '../ItemForm/ItemForm';
import Header from '../Header/Header'
import './AddItem.css';

//Uuden liikuntarivin lisäyskomponentti
function AddItem(props) {
    return (
      <Content>

        <div className="additem">

        <Header/>

        <ItemForm onFormSubmit={props.onFormSubmit} />

        </div>

      </Content>
    );
}

export default AddItem;