import React, { useState } from "react";
import "../styles/movieCard.css";

const MovieCard = ({movie}) => {
    return (
        <div className="MovieCard">
            <h1>{movie.title}</h1>
        </div>
    );
};

export default MovieCard;