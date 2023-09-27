import logo from '../../images/logo.png'
const Navbar = () => {
    return (
      <>
        <nav className="navbar container navbar-expand-lg ">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="nav_icon">
              <i className="fa-solid fa-bars"></i>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item active ">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item dropdown active">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  PROTFOLIO
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a target="_black"
                    className="dropdown-item"
                    href=" https://quriarbox.netlify.app/"
                  >
                    Quriar box app
                  </a>
                  <a target="_blank"
                    className="dropdown-item"
                    href=" https://petriol-app.netlify.app/"
                  >
                    Petroil app
                  </a>
                  <a target="_blank"
                    className="dropdown-item"
                    href=" https://rakib-siddiki.github.io/Creative-it_landing-page/"
                  >
                    CREATIVE IT LANDIG-PAGE
                  </a>
                  <a className="dropdown-item"href="https://rakib-siddiki.github.io/Agenc/">
                    AGENC WEBSITE FUll RESPONSIVE
                  </a>
                  <a 
                    className="dropdown-item"
                    href="https://rakib-siddiki.github.io/pack-go/"
                  >
                    PACK & GO PROJECT
                  </a>
                  <a 
                    className="dropdown-item"
                    href="
            https://rakib-siddiki.github.io/Kuub_/"
                  >
                    
                    PSD TO HTML
                  </a>
                  <a 
                    className="dropdown-item"
                    href="https://rakib-siddiki.github.io/Practice_project/"
                  >
                    PARCTICE-PROJECT
                  </a>
                </div>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  SERVICES
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link last-menu" href="#">
                  HIRE ME
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
};

export default Navbar;