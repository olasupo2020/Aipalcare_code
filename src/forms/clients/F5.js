import React, { Component } from 'react';

class F5 extends Component {
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
            <div className="col-12">
            <h5 className="card-title mt-3">Present Medical Information
           (Please complete this section completely)</h5>
            <label for="inputAddress" className="form-label">
            Has your child previously received or currently receiving
            behavioral services?

            </label>
            <input type="text" className="form-control" id="inputAddress"
             onChange={handleChange('hasYour')}
              defaultValue={values.hasYour} 
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
            What is the name of the agency or behavior support professional
            working with your child? (If yes, when was this implemented and by whom?)

            </label>
            <input type="text" className="form-control" id="inputAddress"
             onChange={handleChange('agency')}
              defaultValue={values.agency} 
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Present Medications</label>
            <input type="text" className="form-control" id="inputAddress"
              onChange={handleChange('pm')}
              defaultValue={values.pm}
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Does your child have a history of any seizures?(If yes, please explain)</label>
            <input type="text" className="form-control" id="inputEmail4"
               onChange={handleChange('history')}
              defaultValue={values.history}
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">Has your child ever had any previous therapies?
             (If yes, please explain when, where, and what type.)</label>
            <input type="text" className="form-control" id="inputEmail4"
               onChange={handleChange('previous')}
              defaultValue={values.previous}
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">Has your child had formal vision testing?
             (If yes, where and what were the results? Does your child wear glasses? 
            Is your child presently followed for vision care?)</label>
            <input type="text" className="form-control" id="inputEmail4"
               onChange={handleChange('vision')}
              defaultValue={values.vision}
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">Has your child had formal hearing testing?
             (If yes, where and what were the results?)</label>
            <input type="text" className="form-control" id="inputEmail4"
               onChange={handleChange('hear')}
              defaultValue={values.hear}
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">Does your child have any adaptive/medical equipment?
             (If yes, please explain.)</label>
            <input type="text" className="form-control" id="inputEmail4"
               onChange={handleChange('equip')}
              defaultValue={values.equip}
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">Does your child follow any special diet?
             (If yes, please explain.)</label>
            <input type="text" className="form-control" id="inputEmail4"
               onChange={handleChange('diet')}
              defaultValue={values.diet}
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">Does your child have any allergies?
             (If yes, please explain.)</label>
            <input type="email" className="form-control" id="inputEmail4"
               onChange={handleChange('allergy')}
              defaultValue={values.allergy}
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

export default F5
