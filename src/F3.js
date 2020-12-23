import React, { Component } from 'react';

class F3 extends Component {
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
          <h5 className="card-title mt-3 text-center">BILLING INFORMATION</h5> 
        <h5 className="card-title mt-3">Person Responsible for Bills
         (Who is responsible for all unpaid balances, copays, and deductibles)
        </h5>
        <form className="row g-3">
          <div className="col-md-6">
              <label for="inputCity" className="form-label">Name</label>
              <input type="text" className="form-control" id="inputCity"
                 onChange={handleChange('name')}
              defaultValue={values.name}
              />
            </div>
            <div className="col-12">
            <label for="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" 
            placeholder="1234 Main St"
            onChange={handleChange('address4')}
              defaultValue={values.address4}
            />
            </div>
            <div className="col-md-6">
            <label for="inputCity" className="form-label">Phone #</label>
            <input type="text" className="form-control" id="inputCity"
               onChange={handleChange('phone2')}
              defaultValue={values.phone2}
            />
          </div>
          <div className="col-md-2">
            <label for="inputZip" className="form-label">Soc Sec #</label>
            <input type="text" className="form-control" id="inputZip"
               onChange={handleChange('socSec3')}
              defaultValue={values.socSec3}
            />
          </div> 
        </form>
        <h5 className="card-title mt-3">Insurance Information 
         (Copy all information from your card and give the card to the front desk for copy)</h5>
        <form className="row g-3">
            <div className="col-md-6">
              <label for="inputCity" className="form-label">
              Primary Insurance
              </label>
              <input type="text" className="form-control" id="inputCity"
                 onChange={handleChange('pi')}
              defaultValue={values.pi}
              />
            </div>
            <div className="col-12">
            <label for="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" 
            placeholder="1234 Main St"
            onChange={handleChange('address5')}
              defaultValue={values.address5}
            />
            </div>
            <div className="col-md-2">
            <label for="inputZip" className="form-label">Policy ID #</label>
            <input type="text" className="form-control" id="inputZip"
               onChange={handleChange('pid')}
              defaultValue={values.pid}
            />
          </div> 
          <div className="col-md-2">
            <label for="inputZip" className="form-label">Group #</label>
            <input type="text" className="form-control" id="inputZip"
               onChange={handleChange('group')}
              defaultValue={values.group}
            />
          </div> 
          <div className="col-md-6">
            <label for="inputCity" className="form-label">Phone #</label>
            <input type="text" className="form-control" id="inputCity"
               onChange={handleChange('phone3')}
              defaultValue={values.phone3}
            />
          </div>
          <div className="col-md-6">
              <label for="inputCity" className="form-label">Cardholders Name</label>
              <input type="text" className="form-control" id="inputCity"
                 onChange={handleChange('cn')}
              defaultValue={values.cn}
              />
            </div>
            <div className="col-md-2">
            <label for="inputZip" className="form-label">Relationship to Patient</label>
            <input type="text" className="form-control" id="inputZip"
               onChange={handleChange('rtp')}
              defaultValue={values.rtp}
            />
          </div> 
          <div className="col-md-6">
            <label for="inputCity" className="form-label">Date of Birth</label>
            <input type="text" className="form-control" id="inputCity"
               onChange={handleChange('dob2')}
              defaultValue={values.dob2}
            />
          </div>
          </form>
          <form className="row g-3 mt-2">
          <div className="col-md-6">
              <label for="inputCity" className="form-label">
              Secondary Insurance
              </label>
              <input type="text" className="form-control" id="inputCity"
                 onChange={handleChange('si')}
              defaultValue={values.si}
              />
            </div>
            <div className="col-12">
            <label for="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" 
            placeholder="1234 Main St"
            onChange={handleChange('address6')}
              defaultValue={values.address6}
            />
            </div>
            <div className="col-md-2">
            <label for="inputZip" className="form-label">Policy ID #</label>
            <input type="text" className="form-control" id="inputZip"
               onChange={handleChange('pid2')}
              defaultValue={values.pid2}
            />
          </div> 
          <div className="col-md-2">
            <label for="inputZip" className="form-label">Group #</label>
            <input type="text" className="form-control" id="inputZip"
               onChange={handleChange('group2')}
              defaultValue={values.group2}
            />
          </div> 
          <div className="col-md-6">
            <label for="inputCity" className="form-label">Phone #</label>
            <input type="text" className="form-control" id="inputCity"
               onChange={handleChange('phone4')}
              defaultValue={values.phone4}
            />
          </div>
          <div className="col-md-6">
              <label for="inputCity" className="form-label">Cardholders Name</label>
              <input type="text" className="form-control" id="inputCity"
                 onChange={handleChange('cn2')}
              defaultValue={values.cn2}
              />
            </div>
            <div className="col-md-2">
            <label for="inputZip" className="form-label">Relationship to Patient</label>
            <input type="text" className="form-control" id="inputZip"
               onChange={handleChange('rtp2')}
              defaultValue={values.rtp2}
            />
          </div> 
          <div className="col-md-6">
            <label for="inputCity" className="form-label">Date of Birth</label>
            <input type="text" className="form-control" id="inputCity"
               onChange={handleChange('dob3')}
              defaultValue={values.dob3}
            />
          </div>
          <h5 className="card-title mt-3">How did you hear about us?</h5>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">Referring person/contact</label>
            <input type="text" className="form-control" id="inputCity"
               onChange={handleChange('rpc')}
              defaultValue={values.rpc}
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

export default F3
