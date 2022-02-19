import React from "react";
import { Link } from "react-router-dom";

const Navbhar = ()=>{
    return(
        <>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'} >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/service'} >Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/contact'} >Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
  </>
    )
}
export default Navbhar;