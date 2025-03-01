import React from 'react'

function Header() {
  return (
    <>
      {/* HEADER START */}
      <h1>This is HEader</h1>
      <header className="tj-header-area header-absolute">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center">
              <div className="logo-box">
                <a href="index-2.html">
                  <img src="assets/img/logo/logo.png" alt="" />
                </a>
              </div>

              <div className="header-menu" id="headerMenu">
                <nav>
                  <ul>
                    <li>
                      <a href="#intro">Home</a>
                    </li>
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
              <div className="mobile-menu d-lg-none"></div>
              <div className="header-button">
                <a href="#" className="btn tj-btn-primary">
                  Hire me!
                </a>
              </div>
              <div className="menu-bar d-lg-none">
                <button>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="tj-header-area header-2 header-sticky sticky-out">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center">
              <div className="logo-box">
                <a href="index-2.html">
                  <img src="assets/img/logo/logo.png" alt="" />
                </a>
              </div>

              <div className="header-menu">
                <nav>
                  <ul>
                    <li>
                      <a href="#intro">Home</a>
                    </li>
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
              <div className="mobile-menu d-lg-none"></div>
              <div className="header-button">
                <a href="#" className="btn tj-btn-primary">
                  Hire me!
                </a>
              </div>
              <div className="menu-bar d-lg-none">
                <button>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- HEADER END --> */}
    </>
  )
}

export default Header