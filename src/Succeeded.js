import React, { Component } from 'react'

class Succeeded extends Component {
  render() {
    return (
      <div>
        <div className="container card text-center mrgn-t border-info" style={{width: "30rem"}}>
        <h2 className="mt-3" style={{color: "#5bc0de"}}>Thank You For Your Submission</h2>
        <p className="text-muted">We sent you an email with further instructions.</p>
        <div className="mb-3">
          <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-envelope mt-3" fill="#5bc0de" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
          </svg>
        </div>
        </div>
      <p className="mt-5 text-muted text-center">&copy; Aipalcare 2020</p>
      </div>
    )
  }
}

export default Succeeded
