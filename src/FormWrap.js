import React, { Component } from 'react';
import F1 from "./F1";
import F2 from "./F2";
import F3 from "./F3";
import F4 from "./F4";
import F5 from "./F5";
import F6 from "./F6";
import F7 from "./F7";
import F8 from "./F8";
import F9 from "./F9";
import Confirmation from "./Confirmation";
import Succeeded from "./Succeeded";


export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    address: "",
    dob: "",
    socSec: "",
    firstName2: "",
    lastName2: "",
    employer: "",
    phone: "",
    socSec2: "",
    emailAddress: "",
    diagnosis: "",
    rtf: "",
    pn: "",
    nop: "",
    address2: "",
    op: "",
    pn2: "",
    nop2: "",
    address3: "",
    op2: "",
    name: "",
    address4: "",
    phone2: "",
    socSec3: "",
    pi: "",
    address5: "",
    pid: "",
    group: "",
    phone3: "",
    cn: "",
    rtp: "",
    dob2: "",
    si: "",
    address6: "",
    pid2: "",
    group2: "",
    phone4: "",
    cn2: "",
    rpt2: "",
    dob3: "",
    rpc: "",
    childsName: "",
    dob4: "",
    nopcf: "",
    rltnshp: "",
    cd: "",
    wrytt: "",
    ptc: "",
    omcp: "",
    ghoyc: "",
    hasYour: "",
    agency: "",
    pm: "",
    history: "",
    previous: "", 
    vision: "",
    hear: "",
    equip: "",
    diet: "",
    allergy: "",
    comms: "",
    ap: "",
    ability: "",
    handle: "",
    redirect: "",
    sb: "",
    hand: "",
    ws: "",
    vs: "",
    di: "",
    pls: "",
    surgery: "",
    tc: "",
    precaution: "",
    pt: "",
    term: "",
    tod: "",
    bw: "",
    lohs: "",
    comp: "",
    concern: "",
    desc: "",
    ro: "",
    coaf: "",
    wi: "",
    sfw: "",
    u2ws: "",
    sc: "",
    dfac: "",
    fs: "",
    ds: "",
    uc: "",
    cws: "",
    dp: "",
    current: "",
    goals: ""
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { 
      firstName, lastName, address, dob, socSec, firstName2, lastName2, employer,
    phone, socSec2, emailAddress, diagnosis, rtf, pn, nop, address2, op, pn2, nop2,
    address3, op2, name, address4, phone2, socSec3, pi, address5, pid, group, phone3, cn,
    rtp, dob2, si, address6, pid2, group2, phone4, cn2, rpt2, dob3, rpc, childsName, dob4,
    nopcf, rltnshp, cd, wrytt, ptc, omcp, ghoyc, hasYour, agency, pm, history, previous,
    vision, hear, equip, diet, allergy, comms, ap, ability, handle, redirect, sb, hand, ws, vs,
    di, pls, surgery, tc, precaution, pt, term, tod, bw, lohs, comp, concern, desc, ro,
    coaf, wi, sfw, u2ws, sc, dfac, fs, ds, uc, cws, dp, current, goals
     } = this.state;
    const values = { 
      firstName, lastName, address, dob, socSec, firstName2, lastName2, employer,
    phone, socSec2, emailAddress, diagnosis, rtf, pn, nop, address2, op, pn2, nop2,
    address3, op2, name, address4, phone2, socSec3, pi, address5, pid, group, phone3, cn,
    rtp, dob2, si, address6, pid2, group2, phone4, cn2, rpt2, dob3, rpc, childsName, dob4,
    nopcf, rltnshp, cd, wrytt, ptc, omcp, ghoyc, hasYour, agency, pm, history, previous,
    vision, hear, equip, diet, allergy, comms, ap, ability, handle, redirect, sb, hand, ws, vs,
    di, pls, surgery, tc, precaution, pt, term, tod, bw, lohs, comp, concern, desc, ro,
    coaf, wi, sfw, u2ws, sc, dfac, fs, ds, uc, cws, dp, current, goals
     };

    switch (step) {
      case 1:
        return (
          <F1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <F2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <F3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 4:
          return (
            <F4
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
          case 5:
            return (
              <F5
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
            case 6:
              return (
                <F6
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              );
              case 7:
                return (
                  <F7
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                  />
                );
                case 8:
                  return (
                    <F8
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleChange}
                      values={values}
                    />
                  );
                  case 9:
                    return (
                      <F9
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                      />
                    );
        case 10:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 11:
        return <Succeeded />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;