function Header() {
  return (
    <>
      {/* <!-- Preloader Area Start --> */}
      <div className="preloader">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path
            id="preloaderSvg"
            d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
          ></path>
        </svg>

        <div className="preloader-heading">
          <div className="load-text">
            <span>G</span>
            <span>A</span>
            <span>U</span>
            <span>R</span>
            <span>A</span>
            <span>V</span>
          </div>
        </div>
      </div>
      {/* <!-- Preloader Area End --> */}

      {/* <!-- start: Back To Top --> */}
      <div className="progress-wrap" id="scrollUp">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* <!-- end: Back To Top --> */}

      {/* <!-- HEADER START --> */}
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
      {/* </body> */}
    </>
  );
}

export default Header;
