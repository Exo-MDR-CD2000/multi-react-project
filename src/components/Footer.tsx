import React from 'react';
// create bootstrap footer here and do not use react-bootstrap dependency. regular bootstrap is fine.

/**
 * The Footer component that provides footer content.
 * 
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="text-center p-3">
          © 2023 Jose Guillen
        </div>
      </div>
    </footer>
  );
};

export default Footer;
