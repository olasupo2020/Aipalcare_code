import React, { Component } from 'react';

class F7 extends Component {
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
            </ul>
          </div>
          </div>
          <div className="card-body">
          <h5 className="card-title mt-3 text-center">MEDICAL HISTORY</h5> 
          <h5 className="card-title mt-3">Injury/Surgery Information
           (Please complete this section if therapy is related to an injury or surgical procedure)</h5>
          <form className="row g-3 mb-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">Date of Injury</label>
              <input type="text" className="form-control" id="inputEmail4"
                onChange={handleChange('di')}
              defaultValue={values.di}
              />
            </div>
            <div className="col-12">
            <label for="inputAddress" className="form-label">Please explain the injury and how it 
            occurred?
            </label>
            <input type="text" className="form-control" id="inputAddress"
            onChange={handleChange('pls')}
              defaultValue={values.pls} 
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Was surgery performed due to this injury?
             (Where was surgery performed? Length of hospital stay? Please explain the details of the surgery)
            </label>
            <input type="text" className="form-control" id="inputAddress"
            onChange={handleChange('surgery')}
              defaultValue={values.surgery} 
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Did you have any therapy concerns 
            for your child prior to this event? (If yes, please explain)
            </label>
            <input type="text" className="form-control" id="inputAddress"
            onChange={handleChange('tc')}
              defaultValue={values.tc} 
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Does your child have any medical or movement 
            precautions because of this? (If yes, please explain) 
            </label>
            <input type="text" className="form-control" id="inputAddress"
            onChange={handleChange('precaution')}
              defaultValue={values.precaution} 
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Has your child received previous 
            therapy for this injury/surgery? (If yes, please explain)  
            </label>
            <input type="text" className="form-control" id="inputAddress"
            onChange={handleChange('pt')}
              defaultValue={values.pt} 
            />
          </div>
          <div className="arnd mt-4">
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

export default F7
