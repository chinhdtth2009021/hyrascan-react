import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Navbar from "./Navbar";
    // import { library } from '@fortawesome/fontawesome-svg-core';
    // import {
    //     faChevronLeft,
    //     faTwitter
    // } from '@fortawesome/free-brands-svg-icons';

    // library.add(
    //     faChevronLeft,
    //     faTwitter
    // );   
class Blocks extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="container-lg">
                    <section className="search">
                        <h1>HYRA Chain Testnet Explorer</h1>
                        <div class="input-group mb-3">
                            <button class="btn btn-selec" type="button" data-bs-toggle="dropdown" aria-expanded="false">All
                                <i class="bi bi-chevron-down ps-5" ></i></button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">All</a></li>
                                <li><a class="dropdown-item" href="#">Block</a></li>
                                <li><a class="dropdown-item" href="#">Tx</a></li>
                                <li><a class="dropdown-item" href="#">Address</a></li>
                                <li><a class="dropdown-item" href="#">Token</a></li>
                                <li><a class="dropdown-item" href="#">Uncle</a></li>
                            </ul>
                            <input type="text" class="form-control" aria-label="Text input with dropdown button"
                                placeholder="Search by Address / Txn Hash / Block / Token" />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-search" />
                        </div>
                    </section>
                    <section className="blocks">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Blocks</h3>
                                <p>Block  <strong>#841921</strong> to <strong>#841925</strong> (Total of <strong>1,267,611</strong>  blocks)</p>
                            </div>
                            <div className="col-md-6">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-end">
                                        <li class="page-item disabled">
                                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">First</a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a></li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                                        <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-right"></i> </a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">Last</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </>
        )
    }
}
export default Blocks;