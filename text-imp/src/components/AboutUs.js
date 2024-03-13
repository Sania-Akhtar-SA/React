import PropTypes from 'prop-types'
import React from 'react'


export default function AboutUs(props) {
  return (
    <div className={` my-4 py-2 px-4 bg-${props.Mode} text-${props.Mode==='light'?'dark':'light'}`}>
        <div className="container">
            <footer className="row row-cols-5 py-5 my-5 border-top">
            <div className='col'>
            <h3>{props.name}</h3>
            <p><sub>© 2024</sub></p>
            </div>
            <div className='col'></div>
              <div className='col'>
                <ul className=''>
                <h3>Quick Links</h3>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Contact Us</li>
                    <li>About</li>
                </ul>
                </div>
                <div className='col'></div>
                <ul>
                <h3>Support</h3>
                    <li>Frequently Asked Questions</li>
                    <li>Report a Payment Issue</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
                <div/>
            </footer>
        </div>
    </div>
  )
}

AboutUs.propTypes = {name: PropTypes.string.isRequired}

AboutUs.defaultProps = {name: "Website Name Here"}
