import Head from 'next/head';
import React from 'react';

const pkg = require("@/root/package.json");

export default function Header({ title, hide, className, loggedIn, ...props }) {
    return <>
        <Head>
            <title>{title || pkg.description}</title>
        </Head>
        {!hide && <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand d-flex align-items-center">
                    <span className='fw-bold ps-2'>LINK TRIBUTOS</span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>}
    </>;
}