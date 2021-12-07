import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-700 mt-5">
      <MDBContainer>
        <div className="row justify-content-center text-center py-3 mt-3">
          <div className="col-12 text-center pb-2">
            <Link href="/">
              <a>
                <img src="/logo-gray.png" alt="Logo" width={96} />
              </a>
            </Link>
          </div>
          <div className="col-12">
            <a
              href="https://partager.io/mentions-legales/"
              target="_blank"
              className="link small text-gray-300"
            >
              Mentions légales
            </a>
            <span> - </span>
            <a
              href="https://partager.io/politique-de-confidentialite/"
              target="_blank"
              className="link small text-gray-300"
            >
              Politique de confidentialité
            </a>
            <span> - </span>
            <a
              href="https://partager.io/conditions-generale-de-service/"
              target="_blank"
              className="link small text-gray-300"
            >
              CGS
            </a>
            <span> - </span>
            <a
              href="https://partager.io/cgu/"
              target="_blank"
              className="link small text-gray-300"
            >
              CGU
            </a>
            <span> - </span>
            <a
              href="https://partager.io/politique-cookies/"
              target="_blank"
              className="link small text-gray-300"
            >
              Politique des cookies
            </a>
          </div>
        </div>
      </MDBContainer>
    </footer>
  );
};

export default Footer;
