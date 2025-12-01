import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                <button className="navbar-toggler justify-content-end bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link text-light" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href="#">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
