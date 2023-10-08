import React from 'react';

import Content from '../Content/Content';
import ItemForm from '../ItemForm/ItemForm';

//Itemien editointikomponentti
function EditItem(props) {

	const index = props.data.findIndex (item => item.id === props.match.params.id);
	let itemData = props.data[index];

	return (
		<Content> 
		<div className="edititem">
			<h2>Liikuntamerkinnän muokkaus</h2>

			<ItemForm onFormSubmit={props.onFormSubmit} selectList={props.selectList} data={itemData} />

			</div>
		</Content>
		
		);
}
export default EditItem;