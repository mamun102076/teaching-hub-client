import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <Link>
                                <FaFacebook></FaFacebook>
                            </Link>
                            <Link>
                                <FaTwitter></FaTwitter>
                            </Link>
                            <Link>
                                <FaWhatsapp></FaWhatsapp>
                            </Link>
                            <Link>
                                <FaYoutube></FaYoutube>
                            </Link>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3">© 2022 Copyrights: All rights reserved by
                        <Link href="/"> Teaching Hub</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;