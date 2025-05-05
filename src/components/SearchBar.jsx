import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/SearchBar.css";

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <form className="search-form">
                <input type="text" placeholder="Search..." className="search-input" />
                <button type="submit" className="search-button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </div>
    );
};

export default SearchBar;