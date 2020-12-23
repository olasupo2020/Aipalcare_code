import React, { Component } from 'react';

class Confirmation extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div>
        <div className="container card text-center mrgn-t border-info" style={{width: "30rem"}}>
        <div className="card-body">
        <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-card-checklist mb-2" fill="#5bc0de" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
          <path fill-rule="evenodd" d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
        </svg>
        <h5 className="text-muted">By proceeding, you accept the terms of policy and service. 
        Please, confirm that all information given are correct and up to date before you continue.</h5>
        <div className="arnd mt-4 mb-3">
            <button className="btn btn-lg btn-outline-info" onClick={this.back}>
            Back
            </button>
            <button className="btn btn-lg btn-info" onClick={this.continue}>
            Confirm & Continue
            </button>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Confirmation
