import React, { Component } from 'react';

class F9 extends Component {
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
            </ul>
          </div>
          </div>
          <div className="card-body">
          <h5 className="card-title mt-3 text-center">DEVELOPMENTAL HISTORY</h5>
          <h5 className="card-title mt-3">At what approximate age did your child reach the 
          following developmental milestones (Please skip this section if your 
          child is not here for a birth or developmental problem)?
          </h5>
          <form className="row g-3 mb-3">
          <div className="col-md-2">
            <label for="inputZip" className="form-label">
            Roll Over
            </label>
            <input type="text" className="form-control" id="inputZip"
              onChange={handleChange('ro')}
              defaultValue={values.ro}
            />
            </div>
            <div className="col-md-2">
            <label for="inputZip" className="form-label">
            Creep on All Fours
            </label>
            <input type="text" className="form-control" id="inputZip"
               onChange={handleChange('coaf')}
              defaultValue={values.coaf}
            />
            </div> 
            <div className="col-md-2">
            <label for="inputZip" className="form-label">
            Walk Independently
            </label>
            <input type="text" className="form-control" id="inputZip"
              onChange={handleChange('wi')}
              defaultValue={values.wi}
            />
            </div>
            <div className="col-md-2">
            <label for="inputZip" className="form-label">
            Say First Word
            </label>
            <input type="text" className="form-control" id="inputZip"
              onChange={handleChange('sfw')}
              defaultValue={values.sfw}
            />
            </div>
            <div className="col-md-2">
            <label for="inputZip" className="form-label">
            Use 2 Word Sentence
            </label>
            <input type="text" className="form-control" id="inputZip"
              onChange={handleChange('u2ws')}
              defaultValue={values.u2ws}
            />
            </div>
             <div className="col-md-2">
            <label for="inputZip" className="form-label">
            Speak Clearly
            </label>
            <input type="text" className="form-control" id="inputZip"
              onChange={handleChange('sc')}
              defaultValue={values.sc}
            />
            </div>
            <div className="col-md-2">
            <label for="inputZip" className="form-label">
            Drink from a Cup
            </label>
            <input type="text" className="form-control" id="inputZip"
              onChange={handleChange('dfac')}
              defaultValue={values.dfac}
            />
            </div>
            <div className="col-md-2">
            <label for="inputZip" className="form-label">
            Feed Self
            </label>
            <input type="text" className="form-control" id="inputZip"
              onChange={handleChange('fs')}
              defaultValue={values.fs}
            />
            </div>
            <div className="col-md-2">
            <label for="inputZip" className="form-label">
            Dress Self
            </label>
            <input type="text" className="form-control" id="inputZip"
              onChange={handleChange('ds')}
              defaultValue={values.ds}
            />
            </div>
            <div className="col-md-2">
            <label for="inputZip" className="form-label">
            Use Crayon
            </label>
            <input type="text" className="form-control" id="inputZip"
              onChange={handleChange('uc')}
              defaultValue={values.uc}
            />
            </div>
            <div className="col-md-2">
            <label for="inputZip" className="form-label">
            Cut with Scissors
            </label>
            <input type="text" className="form-control" id="inputZip"
              onChange={handleChange('cws')}
              defaultValue={values.cws}
            />
            </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Has your child been evaluated by 
            a Developmental Pediatrician? (If yes, who and where?)</label>
            <input type="text" className="form-control" id="inputAddress"
            onChange={handleChange('dp')}
              defaultValue={values.dp} 
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Does your child have a current IFSP/IEP? 
            (If yes, please bring provide us with a copy)</label>
            <input type="text" className="form-control" id="inputAddress"
            onChange={handleChange('current')}
              defaultValue={values.current} 
            />
          </div>
          <h5 className="card-title mt-3">Therapy Goals</h5>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Please describe what your goals for therapy are. 
            What do you hope therapy will accomplish?</label>
            <input type="text" className="form-control" id="inputAddress"
            onChange={handleChange('goals')}
              defaultValue={values.goals} 
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

export default F9
