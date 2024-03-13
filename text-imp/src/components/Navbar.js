import PropTypes from 'prop-types'
import React from 'react'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`} >
      <div className="container-fluid" >
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">{props.about}</a>
            </li>
          </ul>
            <div class={`form-check form-switch float-end my-3 bg-${props.Mode}`}>
              <input class={`form-check-input bg-${props.Mode}`} onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label class={`form-check-label text-${props.Mode==='light'?'dark':'light'}`} for="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    about:PropTypes.string
}

Navbar.defaultProps = {
    title : "Set Title Here",
    about : "About Text Here"
}
