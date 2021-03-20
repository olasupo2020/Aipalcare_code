import React, { useState } from 'react';
import logo from "./images/png14.png";
import { Link } from "react-router-dom";
import CardData from './contents/cards.json';
import CardComponent from './dashboard/Cards/CardComponent';
import { useAuth } from "./auth/AuthContext";
import { useHistory } from "react-router-dom";



console.log(CardData[0])

function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }


  return (
    <div style={{ margin: '5%' }}>
      <h1>DASHBOARD</h1>
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
