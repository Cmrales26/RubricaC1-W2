import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="informacion">
        <div className="data">
          <h1>INFORMATION</h1>
          <p style={{ marginTop: '1rem' }}>Our website is a testament to the power and versatility of React, a cutting-edge JavaScript library that has enabled us to craft a dynamic and engaging online experience. By leveraging a combination of React's core features such as useState, useEffect, localStorage, Context API, Hooks, and conditional routing, we've achieved a robust and user-friendly web application.</p>

          <div className="aviso">
            <p>This website has been created for academic purposes. &copy; </p>
          </div>
        </div>
        <div className="vertical-line"></div>
      </div>
      <div className="autores">
        <h1>Autores</h1>
        <div className="listaautores">


          <div className="autor1">
            <div className="nombre">
              <h3>Nelson Morales</h3>
            </div>
            <div className="redes">
              <div className="github">
                <a href="https://github.com/Cmrales26" target='_blank' className='red'>
                  <div className="icono"><i className="fa-brands fa-github"></i></div>
                  <div className="usuario"><p>Cmrales26</p></div>
                </a>
              </div>
              <div className="linkedin">
                <a href="https://www.linkedin.com/in/cmrales26/" target='_blank' className='red'>
                  <div className="icono"><i className="fa-brands fa-linkedin-in"></i></div>
                  <div className="usuario"><p>Cmrales26</p></div>
                </a>

              </div>
              <div className="twitter">
                <a href="https://twitter.com/Cmrales26" target='_blank' className='red'>
                  <div className="icono"><i className="fa-brands fa-x-twitter"></i></div>
                  <div className="usuario"><p>@Cmrales26</p></div>
                </a>

              </div>
            </div>
          </div>


          <div className="autor2">
            <div className="nombre">
              <h3>Andrea Dominguez</h3>
            </div>
            <div className="redes">
              <div className="github">
                <a href="https://github.com/AndyDA1810" target='_blank' className='red'>
                  <div className="icono"><i className="fa-brands fa-github"></i></div>
                  <div className="usuario"><p>AndyDA1810</p></div>
                </a>
              </div>
              <div className="linkedin">
                <a href="https://www.linkedin.com/in/andrea-dom%C3%ADnguez-afanador-6a00a217b/" target='_blank' className='red'>
                  <div className="icono"><i className="fa-brands fa-linkedin-in"></i></div>
                  <div className="usuario"><p>Andrea Dominguez</p></div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer