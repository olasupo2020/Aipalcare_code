import React from 'react';
import logo from "./images/png14.png";
import { Link } from "react-router-dom";
import CardData from './contents/cards.json';
import CardComponent from './dashboard/Cards/CardComponent';




console.log(CardData[0])

function Dashboard() {
  return (
    <div style={{ margin: '5%' }}>

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 mb-3">
            <CardComponent model={CardData[0]} />
          </div>
          <div className="col-sm-6 col-md-4 mb-3">
            <CardComponent model={CardData[1]} />
          </div>
          <div className="col-sm-6 col-md-4 mb-3">
            <CardComponent model={CardData[2]} />
          </div>

          <div className="col-sm-6 col-md-4 mb-3">
            <CardComponent model={CardData[3]} />
          </div>

          <div className="col-sm-6 col-md-4 mb-3">
            <CardComponent model={CardData[4]} />
          </div>

          <div className="col-sm-6 col-md-4 mb-3">
            <CardComponent model={CardData[5]} />
          </div>
          <div className="col-sm-6 col-md-4 mb-3">
            <CardComponent model={CardData[6]} />
          </div>
          <div className="col-sm-6 col-md-4 mb-3">
            <CardComponent model={CardData[7]} />
          </div>
          <div className="col-sm-6 col-md-4 mb-3">
            <CardComponent model={CardData[8]} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard