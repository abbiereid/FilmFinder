import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/SearchBar.css";
import { fetchData } from '../js/search.js';

const SearchBar = () => {
    const [input, setInput] = useState("");

    const handleSubmit = async (value) => {
        await fetchData(value);
        setInput("");
    };

    return (
        <div className="SearchBar">
            <form className="search-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(input);
                }}>
                <input 
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="search-button clickable">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </div>
    );
};

export default SearchBar;