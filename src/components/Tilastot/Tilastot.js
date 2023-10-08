import React from 'react';
import Header from '../StatsHeader/Header'

import { Line } from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2'
import Content from '../Content/Content';
import Button from '../buttons'
import './Tilastot.css';


//Tietojen kuvaaminen graafien avulla
export default function Tilastot(props) {

const reducer = (groupedData, currentItem) => {
  const index = groupedData.findIndex(item=> item.tyyppi === currentItem.tyyppi);
  if (index >= 0) {
    groupedData[index].aika = groupedData[index].aika + currentItem.aika;
  }else{
    groupedData.push(
      {
        tyyppi: currentItem.tyyppi,
        aika: currentItem.aika
      });
  }
  return groupedData;
}

let  groupedData = props.data.reduce(reducer, [])

  let doughnutData = {
    labels:groupedData.map(item => item.tyyppi),
    datasets: [
      {
        data: groupedData.map(item =>item.aika),
        backgroundColor: [
          '#FF6384',
          '#36A2E8',
          '#FFCE56'
        ]
      }
    ]
  }

let linedata = props.data.map( item => ({x:item.kirjauspäivä, y:item.aika}));
 
let data = {
  datasets: [
    {
      label: "Urheilusuoritus",
      data: linedata,
      fill: false,
      backgroundColor: "rgba(0,0,0,0,2)",
      borderColor: "rgba(0,0,0,0,1)"
    }
  ]
}

let options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          displayFormats: {
            day:'D.M.Y',
            month: 'M.Y'
        }
      }
    }
    ]
  }
}

return (
    <Content>
      <Header/>
      <div className="tilastot">
        <h3>Aikajanan suoritukset</h3>
        <div className="tilastot_graafi">
     <Line 
     data={data}
     options={options} />
     </div>
     <h3>Suoritukset tyypeittin</h3>
     <div className="stats_graph">
       <Doughnut data={doughnutData} />
       </div>
       </div>
    
       <Button primary onClick={props.onLogout}>Kirjaudu ulos</Button>
    </Content>
  )
}
