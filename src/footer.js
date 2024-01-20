import React from "react";
import "./footer.css"
import '@fortawesome/fontawesome-free/css/all.css';
export function Footer(props)
{
    return(
        <>
            <footer className={`bg-dark text-light py-4 ${props.mode === 'dark' ? 'border-top border-white' : 'border-top border-black'}`}>
      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0 footer_details">
            <p>&copy; 2024 Career Catalyst</p>
            <p>All Rights Reserved</p>
            <a href="https://careercatalysttheinitiative.netlify.app/" target="_blank" rel="noopener noreferrer">
              <p>Visit our Official Website</p>
            </a>
            <p>Email - shubhampurwar3103@gmail.com</p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="social-links">
              <a href="https://youtube.com/@The_CareerCatalyst?si=wMmQBWabQ_Ud7IDb" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-3">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.instagram.com/careercatalyst_insight?igsh=YzAwZjE1ZTI0Zg==" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/shubham-purwar-71847b221/" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-3">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <ul className="list-inline mb-0 footer_details">
              <li className="list-inline-item"><a href="/" className="text-light">Home</a></li>
              <li className="list-inline-item"><a href="https://careercatalysttheinitiative.netlify.app/" className="text-light">About US</a></li>
              <li className="list-inline-item"><a href="mailto:shubhampurwar3103@gmail.com" className="text-light">Mail Us</a></li>
              
              
            </ul>
          </div>
        </div>
      </div>
    </footer>      </>
    );
}