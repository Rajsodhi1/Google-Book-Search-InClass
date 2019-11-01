import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <a className="navbar-brand text-dark" href="/">
        Google Books
      </a>
      <a className="navbar-item text-dark nav-link" href="/search">
        Search
      </a>
      <a className="navbar-item text-dark nav-link" href="/save">
        Save
      </a>
    </nav>
  );
}

export default Nav;
