import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faFacebook,
    faTwitter,
    faLinkedinIn,
    faGithub,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faFacebook,
    faTwitter,
    faLinkedinIn,
    faGithub,
    faYoutube

);
class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="container-lg">
                        <a className="navbar-brand" href="#">
                            <img src="/img/bg-footer.png" />
                        </a>
                        <p className="p-3">HYRAscan 2021 (HYRA) | Built by the same team behind <strong>HYRASCAN</strong></p>
                        <a href=""><button type="button" class="btn btn-add-metamark">
                            <img src="/img/icon-metamark.png" className="pe-2" />
                            Add Hyra Scan Network</button> </a>
                        <div className="social">
                            <h5>Follow us:</h5>
                            <div>
                                <a href=""><FontAwesomeIcon icon={faPaperPlane} /></a>
                                <a href=""><FontAwesomeIcon icon={faGithub} /></a>
                                <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href=""><FontAwesomeIcon icon={faYoutube} /></a>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
export default Footer;