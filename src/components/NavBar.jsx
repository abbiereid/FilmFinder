import React, { useState } from "react";
import extendedLogo from "../assets/extendedLogo.svg";
import "../styles/NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchBar from './SearchBar.jsx'


const NavBar = ({ setSearchResults }) => {
    return (
        <nav className="NavBar">
            <ul>
                <li>
                    <a href="/">
                        <img className="logo clickable" src={extendedLogo} alt="Logo" />
                    </a>
                </li>
                <li><SearchBar setSearchResults={setSearchResults}/></li>
                <li className="nav-item clickable"><a href="/">Movies</a></li>
                <li className="nav-item clickable"><a href="/">Series</a></li>
                <li className="nav-item clickable"><a href="/"><FontAwesomeIcon icon={faUser} /></a></li>
            </ul>
        </nav>
    );
};

export default NavBar;