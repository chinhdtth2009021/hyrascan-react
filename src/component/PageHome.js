import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {
//     faChevronDown
// } from '@fortawesome/free-brands-svg-icons';
// library.add(
//     faChevronDown
// );

class PageHome extends Component {
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
                    <section className="history">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="column-hyra"></div>
                            </div>
                            <div className="col-md-4">
                                <div className="column-hyra">
                                    <div className="row p-3">
                                        <div className="col-md-3"><img src="/img/icon-supply.png" className="pt-3 ps-3 " /></div>
                                        <div className="col-md-8">
                                            <p className="text-history">Total Supply</p>
                                            <h5>5,000,000 HYRA</h5>
                                        </div>
                                    </div>
                                    <div className="row p-3">
                                        <div className="col-md-3"><img src="/img/icon-market.png" /></div>
                                        <div className="col-md-8">
                                            <p className="text-history">Market Cap </p>
                                            <h5>$ 312,824,423.857</h5>
                                        </div>
                                    </div>
                                    <div className="row p-3">
                                        <div className="col-md-3"><img src="/img/icon-rewards.png" /></div>
                                        <div className="col-md-8">
                                            <p className="text-history">Total Rewards</p>
                                            <h5>$ 77,205,590</h5>
                                        </div>
                                    </div>
                                    <div className="row p-3">
                                        <div className="col-md-3"><img src="/img/icon-price.png" /></div>
                                        <div className="col-md">
                                            <p className="text-history">Price</p>
                                            <h5>$ 0.103038</h5>
                                        </div>
                                        <div className="col-md">
                                            <span className="text-price">+2.03%</span>
                                        </div>
                                    </div>
                                    <div className="row p-3">
                                        <div className="col-md-3"><img src="/img/icon-volume.png" /></div>
                                        <div className="col-md-8">
                                            <p className="text-history">Volume 24h</p>
                                            <h5>77,205,590 HYRA</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="price-block">
                        <div className="column-hyra1">
                            <div className="row">
                                <div className="col-md">
                                    <p className="text-price">Total block</p>
                                    <p>5,000,000</p></div>
                                <div className="col-md">
                                    <p className="text-price">Blocktime</p>
                                    <p>5,343,023</p>
                                </div>
                                <div className="col-md">
                                    <p className="text-price">AVR Block time </p>
                                    <p>3.5s</p>
                                </div>
                                <div className="col-md">
                                    <p className="text-price">Live TPS</p>
                                    <p>2.1300</p>
                                </div>
                                <div className="col-md">
                                    <p className="text-price">Transactions</p>
                                    <p>19,030,394</p>
                                </div>
                                <div className="col-md">
                                    <p className="text-price">Addresses</p>
                                    <p>371,931</p>
                                </div>
                                <div className="col-md">
                                    <p className="text-price">Contracts</p>
                                    <p>5,773</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="latest">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="column-hyra1">
                                    <h2 className="p-2">Latest Blocks</h2>
                                    <div className="column-latest">
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Bk</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">791,636</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Hash <a href="">0x842cefa8f04a73b3e</a></p>
                                                <p className="text-secondary"><a href="">123 txns </a> in 2s</p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">1.000023 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Bk</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">791,636</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Hash <a href="">0x842cefa8f04a73b3e</a></p>
                                                <p className="text-secondary"><a href="">123 txns </a> in 2s</p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">1.000023 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Bk</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">791,636</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Hash <a href="">0x842cefa8f04a73b3e</a></p>
                                                <p className="text-secondary"><a href="">123 txns </a> in 2s</p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">1.000023 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Bk</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">791,636</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Hash <a href="">0x842cefa8f04a73b3e</a></p>
                                                <p className="text-secondary"><a href="">123 txns </a> in 2s</p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">1.000023 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Bk</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">791,636</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Hash <a href="">0x842cefa8f04a73b3e</a></p>
                                                <p className="text-secondary"><a href="">123 txns </a> in 2s</p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">1.000023 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Bk</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">791,636</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Hash <a href="">0x842cefa8f04a73b3e</a></p>
                                                <p className="text-secondary"><a href="">123 txns </a> in 2s</p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">1.000023 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Bk</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">791,636</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Hash <a href="">0x842cefa8f04a73b3e</a></p>
                                                <p className="text-secondary"><a href="">123 txns </a> in 2s</p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">1.000023 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Bk</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">791,636</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Hash <a href="">0x842cefa8f04a73b3e</a></p>
                                                <p className="text-secondary"><a href="">123 txns </a> in 2s</p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">1.000023 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Bk</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">791,636</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Hash <a href="">0x842cefa8f04a73b3e</a></p>
                                                <p className="text-secondary"><a href="">123 txns </a> in 2s</p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">1.000023 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Bk</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">791,636</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Hash <a href="">0x842cefa8f04a73b3e</a></p>
                                                <p className="text-secondary"><a href="">123 txns </a> in 2s</p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">1.000023 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Bk</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">791,636</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Hash <a href="">0x842cefa8f04a73b3e</a></p>
                                                <p className="text-secondary"><a href="">123 txns </a> in 2s</p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">1.000023 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Bk</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">791,636</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Hash <a href="">0x842cefa8f04a73b3e</a></p>
                                                <p className="text-secondary"><a href="">123 txns </a> in 2s</p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">1.000023 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Bk</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">791,636</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Hash <a href="">0x842cefa8f04a73b3e</a></p>
                                                <p className="text-secondary"><a href="">123 txns </a> in 2s</p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">1.000023 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Bk</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">791,636</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Hash <a href="">0x842cefa8f04a73b3e</a></p>
                                                <p className="text-secondary"><a href="">123 txns </a> in 2s</p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">1.000023 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Bk</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">791,636</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Hash <a href="">0x842cefa8f04a73b3e</a></p>
                                                <p className="text-secondary"><a href="">123 txns </a> in 2s</p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">1.000023 HYRA</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="">
                                        <button type="button" class="btn btn-latest">View all blocks</button>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="column-hyra1">
                                    <h2 className="p-2">Latest Transactions</h2>
                                    <div className="column-latest">
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>  <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1 mt-3">
                                                <span className="text-bk">Tx</span>
                                            </div>
                                            <div className="col-md">
                                                <a href="">0x20a2ff54ceef...</a><br />
                                                <span className="text-secondary"> 12 secs ago</span>
                                            </div>
                                            <div className="col-md-5">
                                                <p>From <a href="">0x7FF1Cc4BdffAe9D887f</a></p>
                                                <p>To <a href="">0xa2872282d3d508a5</a></p>
                                            </div>
                                            <div className="col-md p-0">
                                                <div class="new-ribbon">0 HYRA</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="">
                                        <button type="button" class="btn btn-latest">View all transactions</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </>
        )
    }
}
export default PageHome;