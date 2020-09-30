import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <small>
          made with ❤ by{" "}
          <a
            href="https://github.com/peax3"
            target="_blank"
            rel="noopener noreferrer"
          >
            peax3
          </a>
        </small>
      </p>
      <p>
        <small>
          powered by{" "}
          <a href="https://tmdb.org" target="_blank" rel="noopener noreferrer">
            TMDB
          </a>
        </small>
      </p>
    </footer>
  );
};

export default Footer;
