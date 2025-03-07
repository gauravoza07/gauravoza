import React from 'react'

const Footer = () => {
  return (
    <>
        {/* FOOTER AREA START  */}
      <footer class="tj-footer-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="footer-logo-box">
                <a href="#">
                  <img src="assets/img/logo/logo.png" alt="" />
                </a>
              </div>
              <div class="footer-menu">
                <nav>
                  <ul>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="portfolio.html">Portfolios</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="copy-text">
                <p>
                  &copy; {new Date().getFullYear()} All rights reserved by{" "}
                  <a href="#" target="_blank">
                    Gaurav Oza
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER AREA END  */}
    </>
  )
}

export default Footer

