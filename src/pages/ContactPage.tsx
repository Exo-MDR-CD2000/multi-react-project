import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <section className="py-5 vh-100">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center">
          <h2 className="mb-4">Contact Me</h2>
          <p className="lead mb-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me through my LinkedIn or GitHub profiles.
          </p>
          <div className="d-flex justify-content-center mb-4">
            <a
              href="https://github.com/Exo-MDR-CD2000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark me-3"
              aria-label="GitHub Profile"
            >
              <i className="bi bi-github"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jag1997/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
              aria-label="LinkedIn Profile"
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          </div>
          <p className="text-secondary">
            My personal portfolio site is coming soon. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;