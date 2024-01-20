import React from "react";
import "./nav.css";

export function Nav(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
        <div className="container-fluid nav-container">
          <a className={`navbar-brand ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} href="/">
            <img src="/assets/logo.png" alt="Logo" className="logo-img" />
            {props.brand}
          </a>



          <button
            className={`btn navbar-toggler ${props.mode === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            style={{ borderColor: props.mode === 'dark' ? '#fff' : '#000', backgroundColor: 'transparent' }}
          >
            <span
              className="navbar-toggler-icon"
              style={{ backgroundColor: 'transparent' }}
            ></span>
          </button>


          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class={`offcanvas-header`} style={{ backgroundColor: props.mode === 'dark' ? '#f25319ef' : '#ffffff' }}>

            <h5 class={`offcanvas-title ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} id="offcanvasExampleLabel">Main Menu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className={`offcanvas-body ${props.mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
              <div>
                <div className={"navbar-collapse"} id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className={`nav-link active ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} href="https://careercatalysttheinitiative.netlify.app/">
                        OfFicial Website
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} href="mailto:shubhampurwar3103@gmail.com">
                        Mail Us
                      </a>
                    </li>

                    {/* Include Switch Theme in the same ul */}
                    <li className="nav-item d-flex align-items-center">
                      <label
                        className={`form-check-label ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`}
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Switch Theme
                      </label>
                      <div className="form-check form-switch ms-2" onClick={props.toggle}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



        </div>

      </nav>
    </>
  );
}
