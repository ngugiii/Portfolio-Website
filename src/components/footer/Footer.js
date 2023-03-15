import React from 'react'
import "./Footer.css"

const Footer = (props) => {
  return (
    <footer className="footer" id="footer" data-theme={props.myTheme}>
      <div>
        <p>&copy; Erick Ngugi 2023. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer