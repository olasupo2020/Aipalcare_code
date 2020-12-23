import React, { Component } from 'react';

class F6 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    
    return (
      <div>
          <div className="container mt-5">
        <div className="card mb-5 border-info">
        <div className="container">
        <div className="card-header bg-info mt-3">
            <ul className="nav nav-tabs card-header-tabs ac">
              <li className="nav-item">
                <div className="nav-link disabled">
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right mt-1" fill="#d6d9d2" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link disabled">
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right mt-1" fill="#d6d9d2" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link disabled">
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right mt-1" fill="#d6d9d2" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link disabled">
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right mt-1" fill="#d6d9d2" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link disabled">
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right mt-1" fill="#d6d9d2" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link active" aria-current="true">
                <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="#33a532" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link disabled">
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right mt-1" fill="#d6d9d2" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link disabled">
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right mt-1" fill="#d6d9d2" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link disabled">
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right mt-1" fill="#d6d9d2" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </div>
              </li>
            </ul>
          </div>
          </div>
          <div className="card-body">
          <form className="row g-3">
          <h5 className="card-title mt-3">Present Abilities/Strengths
           (Please describe the following about your child)</h5>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Ability to communicate wants/needs</label>
            <input type="email" className="form-control" id="inputEmail4"
               onChange={handleChange('comms')}
              defaultValue={values.comms}
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Attention span</label>
            <input type="text" className="form-control" id="inputEmail4"
               onChange={handleChange('ap')}
              defaultValue={values.ap}
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Ability to follow directions</label>
            <input type="text" className="form-control" id="inputEmail4"
               onChange={handleChange('ability')}
              defaultValue={values.ability}
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">How does your child handle stress? Please describe their coping skills</label>
            <input type="text" className="form-control" id="inputEmail4"
               onChange={handleChange('handle')}
              defaultValue={values.handle}
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Ability to be redirected</label>
            <input type="text" className="form-control" id="inputEmail4"
               onChange={handleChange('redirect')}
              defaultValue={values.redirect}
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Strength and Balance</label>
            <input type="text" className="form-control" id="inputEmail4"
               onChange={handleChange('sb')}
              defaultValue={values.sb}
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Hand dominance/preference</label>
            <input type="text" className="form-control" id="inputEmail4"
               onChange={handleChange('hand')}
              defaultValue={values.hand}
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Writing skills</label>
            <input type="text" className="form-control" id="inputEmail4"
               onChange={handleChange('ws')}
              defaultValue={values.ws}
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Visual skills</label>
            <input type="text" className="form-control" id="inputEmail4"
               onChange={handleChange('vs')}
              defaultValue={values.vs}
            />
          </div>
          <div className="arnd mb-3 mt-5">
            <button className="btn btn-lg btn-outline-info" onClick={this.back}>
            Back
            </button>
            <button className="btn btn-lg btn-info" onClick={this.continue}>
            Continue
            </button>
            </div>
          </form>
          </div>
          </div>
          </div>
      </div>
    )
  }
}

export default F6
