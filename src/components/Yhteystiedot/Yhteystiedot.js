/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../ContactHeader/Header'
import Button from '../buttons';
import './Yhteystiedot.css';

//Yhteystietolomake, joka palauttaa lähetetyt tiedot konsolilogeina
class Yhteystiedot extends React.Component {
  constructor(props) {
    super(props);
    let Name = localStorage.getItem("Name")
    Name = Name ? Name : null;
    let Phone = localStorage.getItem("Phone")
    Phone = Phone ? Phone : null;
    let Email = localStorage.getItem("Email")
    Email = Email ? Email : null;
    let Message = localStorage.getItem("Message")
    Message = Message ? Message : null;
    this.state = {
     Name:'',
     Phone:'',
     Email:'',
     Message:''
    };

    this.handleName = this.handleName.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({Name: event.target.value});
 } 

 handlePhone(event) {
  this.setState({Phone: event.target.value});
} 

 handleEmail(event) {
  this.setState({Email: event.target.value});
} 


 handleMessage(event) {
  this.setState({Message: event.target.value});
} 

  handleSubmit(event) {
    console.log('Nimi: ' + this.state.Name);
    console.log('Puhelinnumero: ' + this.state.Phone);
    console.log('Sähköpostiosoite: ' + this.state.Email);
    console.log('Viesti: ' + this.state.Message);
    event.preventDefault();
  }

  render() {
    return ( 
      <form onSubmit={this.handleSubmit}>
         <Header/>
         <br/>
        <label>
          Nimi: 
          </label>
          <br/>
          <input
            className="YhteystiedotInput"
            type="text"
            placeholder="Nimi"
            onChange={this.handleName} />
        <br />
        <br />
        <label>
          Puhelinnumero: 
          <input
          className="YhteystiedotInput"
            type="text"
            placeholder="Puhelinnumero"
            onChange={this.handlePhone} />
        </label>
        <br />
        <br />
        <label>
          Sähköpostiosoite: 
          <input
          className="YhteystiedotInput"
            type="text"
            placeholder="Sähköpostiosoite"
            onChange={this.handleEmail} />
        </label>
        <br />
        <br />
        <label>
         Viesti: 
         <textarea
         className="YhteystiedotInput"
            type="text"
            placeholder="Viesti"
            onChange={this.handleMessage} />
        </label>
        <br /> <br />
        <Button type="submit" value="Submit" primary>Lähetä</Button> 
      </form>
    );
  }
}

export default Yhteystiedot;