import React from 'react';
import { Link } from 'react-router-dom';
import FooterCurrentYear from '../utilities/footerCurrentYear';

/**
 * The Footer component that provides footer content.
 * Imported FooterCurrentYear helper function to display the current year.
 * 
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer: React.FC = () => {
  return (
    <footer className="container-fluid text-center text-lg-start border-2 border-top mb-4">
      <div className="row">
        <div className="col p-4">
          <ul className="list-unstyled d-flex justify-content-center mb-3">
            <li className="">
              <a className="text-body-secondary" href="https://github.com/Exo-MDR-CD2000" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <i className="bi bi-github" aria-hidden="true"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="https://www.linkedin.com/in/jag1997/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <i className="bi bi-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li className="">
              <Link className="text-body-secondary" to="/">Home</Link>
            </li>
            <li className="ms-3">
              <Link className="text-body-secondary" to="/my-recipes">My Recipes</Link>
            </li>
            <li className="ms-3">
              <Link className="text-body-secondary" to="/contact">Contact</Link>
            </li>
            <li className="ms-3">
              <Link className="text-body-secondary" to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="footer-text text-center">
            ©{FooterCurrentYear()} Jose Guillen
          </div>
      </div>
    </footer>
  );
};

export default Footer;


/** 
 * 
 * 
 * Footer below is bootstrap template for reference
 
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
    </ul>
  </footer>

   --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  // nice small footer here to test tomorrow

  <footer className="container text-center text-lg-start border-2 border-top py-2 my-4">
      <div className="row">
        <div className="col d-flex justify-content-between align-items-center py-2">
          <div className="footer-text">
            © {FooterCurrentYear()} Jose Guillen
          </div>
          <ul className="list-unstyled d-flex mb-0">
            <li className="ms-3">
              <a className="text-body-secondary" href="https://github.com/Exo-MDR-CD2000" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <i className="bi bi-github" aria-hidden="true"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="https://www.linkedin.com/in/jag1997/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <i className="bi bi-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
*/