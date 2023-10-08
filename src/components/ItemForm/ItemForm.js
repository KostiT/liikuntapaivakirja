import React from 'react';
import { withRouter } from 'react-router';
import Button from '../buttons';

import './ItemForm.css';

class ItemForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                tyyppi: "Uinti",
                aika: 0,
                maksupaiva: undefined,
                kaudenalku: undefined,
                kaudenloppu: undefined,
                saaja: ""
             }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          data: {
              ...this.state.data,
              [name]: value
          }
        });
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.goBack();
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("lähetä lomake");
        let data = Object.assign({}, this.state.data);
        data.summa = parseFloat(data.summa);
        this.props.onFormSubmit(data);
        this.props.history.push("/");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="itemform">          
            
              <div className="itemform__row">
                <div>
                  <label for="name">Liikuntamuoto</label>
                  <select name="tyyppi" value={this.state.data.tyyppi} onChange={this.handleInputChange}>             
                    <option value="Juoksu">Juoksu</option>
                    <option value="Sali">Sali</option>                 
                    <option value="Uinti">Uinti</option>
                    <option value="Muu_urheilu">Muu urheilu</option>
                  </select>                
                </div>
              </div>
  
              <div className="itemform__row">
                <div>
                  <label for="aika">aika</label>
                  <input type="number" name="aika" step="0.01" value={this.state.data.aika} onChange={this.handleInputChange} />
                </div>
                <div>
                  <label for="kirjauspäivä">Kirjauspäivä</label>
                  <input type="date" name="kirjauspäivä" value={this.state.data.kirjauspäivä} onChange={this.handleInputChange} />
                </div>
              </div>
  
              {/* <div className="itemform__row">
                <div>
                  <label for="kaudenalku">Laskutuskauden alku</label>
                  <input type="date" name="kaudenalku" size="10" value={this.state.data.kaudenalku} onChange={this.handleInputChange} />
                </div>
                <div>
                  <label for="kaudenloppu">Laskutuskauden loppu</label>
                  <input type="date" name="kaudenloppu" size="10" value={this.state.data.kaudenloppu} onChange={this.handleInputChange} />          
                </div>
              </div> */}
  
              <div className="itemform__row">
                <div>
                  <label for="saaja">Liikuntapaikka</label>
                  <input type="text" name="saaja" value={this.state.data.saaja} onChange={this.handleInputChange}/>
                </div>
              </div>
  
              <div className="itemform__row">
                <div>
                  <Button onClick={this.handleCancel}>PERUUTA</Button>
                </div>
                <div>
                  <Button type="submit" primary>LISÄÄ</Button>                  
                </div>
              </div>
  
            </div>  
  
          </form>
        );
    }

}

export default withRouter(ItemForm);