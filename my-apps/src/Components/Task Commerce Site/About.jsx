import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="container">
    <div className="content">
      <h1>Commerce.js Demo Store</h1>
      <p>
        This is an open source storefront built using Chec’s headless architecture and the Commerce.js SDK. 
        Commerce.js is a smarter, more efficient way to build eCommerce projects, and we hope you can see that as 
        you explore the world custom eCommerce. Please build on top of, or pick apart this project for your own use.
      </p>
      <p>
        Everything in this project, from the storefront, to the cart, checkout and receipt, is 100% customizable. 
        To build more custom eCommerce projects, using any frontend framework or platform, head over to 
        <a href="https://commercejs.com"> commercejs.com</a>.
      </p>
      <div className="buttons">
        <button className="btn documentation">Documentation</button>
        <button className="btn guides">Guides from the community</button>
      </div>
    </div>
    <div className="illustration">
      <img src="https://commercejs-demo-store.netlify.app/cjs-illustration.svg" alt="Commerce.js Illustration" />
    </div>
    </div>
  )
}

export default About
