import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import '../css/style.css'


class Navbar extends Component {
    render() {
        return (
            <>
                <div className="navbar">
                    <div className="row g-0">
                        <div className="nav-top">
                            <a href=""><i class="bi bi-twitter"></i> </a>
                            <a href=""><FontAwesomeIcon icon={faPaperPlane} /> </a>
                            <a href=""><i class="bi bi-github"></i> </a>
                            <a href="">FAQ </a>
                        </div>
                    </div>
                    <div className="row g-0 ">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-lg d-flex justify-content-evenly">
                                <a className="navbar-brand" href="#">
                                    <img src="/img/logo-hyrascan1.png" className="w-100" />
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Blocks</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Transactions</a>
                                        </li>
                                        <li className="nav-item">
                                            <div class="dropdown">
                                                <a class="nav-link" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Tokens
                                                </a>
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <li><a class="dropdown-item" href="#">View All</a></li>
                                                    <li><a class="dropdown-item" href="#">Favorties</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Favorite Addresses</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Verify Contract</a>
                                        </li>
                                        <li className="nav-item">
                                            <div class="dropdown">
                                                <a class="nav-link icon-hyra" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img src="/img/icon-hyra.png" className="w-100" />
                                                </a>
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <li><a class="dropdown-item" href="#">HYRA Mainnet</a></li>
                                                    <li><a class="dropdown-item" href="#">HYRA Testnet</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </>
        )
    }
}
export default Navbar;