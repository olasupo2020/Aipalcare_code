import React, { Component } from 'react';
import { Link } from "react-router-dom";

class F1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };


  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        {/* <nav className="navbar navbar-light bg-transparent">
        <div className="container">
          <Link to="/">
          <svg style={{color: "#5bc0de"}} width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-left mt-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
      </svg>
          </Link>
        </div>
    </nav> */}
        <div className="container mt-5">
          <div className="card mb-5 border-info">
            <div className="container">
              <div className="card-header bg-info mt-3">
                <ul className="nav nav-tabs card-header-tabs ac">
                  <li className="nav-item">
                    <div className="nav-link active" aria-current="true">
                      <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="#33a532" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link disabled">
                      <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right mt-1" fill="#d6d9d2" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link disabled">
                      <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right mt-1" fill="#d6d9d2" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link disabled">
                      <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right mt-1" fill="#d6d9d2" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link disabled">
                      <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right mt-1" fill="#d6d9d2" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link disabled">
                      <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right mt-1" fill="#d6d9d2" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link disabled">
                      <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right mt-1" fill="#d6d9d2" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link disabled">
                      <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right mt-1" fill="#d6d9d2" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link disabled">
                      <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right mt-1" fill="#d6d9d2" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title mt-3 text-center">PATIENT DEMOGRAPHICS</h5>
              <h5 className="card-title">Patient</h5>
              <form className="row g-3">
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Firstname</label>
                  <input type="text" className="form-control" id="inputEmail4"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">Lastname</label>
                  <input type="text" className="form-control" id="inputPassword4"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                  />
                </div>
                <div className="col-12">
                  <label for="inputAddress" className="form-label">Address</label>
                  <input type="text" className="form-control" id="inputAddress"
                    placeholder="1234 Main St"
                    onChange={handleChange('address')}
                    defaultValue={values.address}
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">Date of Birth</label>
                  <input type="text" className="form-control" id="inputCity"
                    onChange={handleChange('dob')}
                    defaultValue={values.dob}
                  />
                </div>
                <div className="col-md-2">
                  <label for="inputZip" className="form-label">Soc Sec #</label>
                  <input type="text" className="form-control" id="inputZip"
                    onChange={handleChange('socSec')}
                    defaultValue={values.socSec}
                  />
                </div>
              </form>
              <h5 className="card- mt-3">Caregiver</h5>
              <form className="row g-3">
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Firstname</label>
                  <input type="text" className="form-control" id="inputEmail4"
                    onChange={handleChange('firstName2')}
                    defaultValue={values.firstName2}
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">Lastname</label>
                  <input type="text" className="form-control" id="inputPassword4"
                    onChange={handleChange('lastName2')}
                    defaultValue={values.lastName2}
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">Employer</label>
                  <input type="text" className="form-control" id="inputCity"
                    onChange={handleChange('employer')}
                    defaultValue={values.employer}
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">Phone #</label>
                  <input type="text" className="form-control" id="inputCity"
                    onChange={handleChange('phone')}
                    defaultValue={values.phone}
                  />
                </div>
                <div className="col-md-2">
                  <label for="inputZip" className="form-label">Soc Sec #</label>
                  <input type="text" className="form-control" id="inputZip"
                    onChange={handleChange('socSec2')}
                    defaultValue={values.socSec2}
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">Email Address</label>
                  <input type="text" className="form-control" id="inputCity"
                    onChange={handleChange('emailAdress')}
                    defaultValue={values.emailAddress}
                  />
                </div>
              </form>
              <button className="mb-3 btn btn-lg btn-info btn-block mt-4" onClick={this.continue}>
                Continue
          </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default F1
