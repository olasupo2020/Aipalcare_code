import React, { Component } from 'react';

class GoalForm extends Component {
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

                        <div className="card-body">
                            <h5 className="card-title mt-3 text-center">GOAL CREATION</h5>
                            <form className="row g-3">
                                <div className="col-12">
                                    <label for="inputAddress" className="form-label">Goal</label>
                                    <input type="text" className="form-control" id="inputAddress"

                                        defaultValue={"example"}
                                    />
                                </div>
                                <div className="col-12">
                                    <label for="inputAddress" className="form-label">Short/Long Term Goal</label>
                                    <input type="text" className="form-control" id="inputAddress"

                                        defaultValue={"values.rft"}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label for="inputCity" className="form-label">Target Accuracy</label>
                                    <input type="text" className="form-control" id="inputCity"

                                        defaultValue={"values.pn2"}
                                    />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" className="form-label">Goal Initiation Date</label>
                                    <input type="text" className="form-control" id="inputCity"

                                        defaultValue={"values.nop2"}
                                    />
                                </div>
                                <div className="col-12">
                                    <label for="inputAddress" className="form-label">Current Accuracy</label>
                                    <input type="text" className="form-control" id="inputAddress"
                                        placeholder="1234 Main St"

                                        defaultValue={"values.address3"}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputCity" className="form-label">Prompt Level</label>
                                    <input type="text" className="form-control" id="inputCity"

                                        defaultValue={"values.op2"}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputCity" className="form-label">Goal met date</label>
                                    <input type="text" className="form-control" id="inputCity"

                                        defaultValue={"values.op2"}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoalForm
