import React, { Component } from 'react';

class F8 extends Component {
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
            </ul>
          </div>
          </div>
          <div className="card-body">
          <h5 className="card-title mt-3">Birth History (Please skip this section if your 
          child is not here for a birth or developmental problem)</h5>
          <form className="row g-3 mb-3">
          <div className="col-md-6">
              <label for="inputEmail4" className="form-label">Was pregnancy full term?</label>
              <input type="text" className="form-control" id="inputEmail4"
                onChange={handleChange('term')}
              defaultValue={values.term}
              />
            </div>
            <div className="col-12">
              <label for="inputEmail4" className="form-label">Type of Delivery (vaginal, caesarian, breech, forceps, 
              suction, caesarian, breech, forceps or suction)</label>
              <input type="email" className="form-control" id="inputEmail4"
                onChange={handleChange('tod')}
              defaultValue={values.tod}
              />
            </div>
            <div className="col-md-2">
            <label for="inputZip" className="form-label">Birthweight: pounds/ounces</label>
            <input type="text" className="form-control" id="inputZip"
              onChange={handleChange('bw')}
              defaultValue={values.bw}
            />
          </div>
            <div className="col-12">
              <label for="inputEmail4" className="form-label">Length of Hospital Stay (Was the baby at any time in distress?)</label>
              <input type="text" className="form-control" id="inputEmail4"
                onChange={handleChange('lohs')}
              defaultValue={values.lohs}
              />
            </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Please explain any complications the mother and/or 
            baby had before, during, or after the birth</label>
            <input type="text" className="form-control" id="inputAddress"
            onChange={handleChange('comp')}
              defaultValue={values.comp}  
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Was there any type of diagnosis or 
            medical concern about the baby after birth?</label>
            <input type="text" className="form-control" id="inputAddress"
            onChange={handleChange('concern')}
              defaultValue={values.concern} 
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Please describe any family history 
            of developmental or learning problems</label>
            <input type="text" className="form-control" id="inputAddress"
            onChange={handleChange('desc')}
              defaultValue={values.desc} 
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

export default F8
