import Movie from '../movie.js';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmZiYmVhNWMxODYyZTUzNDZkNTczZGU2OGEyNmEwOSIsIm5iZiI6MTYxOTczMzc3NC45MzYsInN1YiI6IjYwOGIyZDBlODFhN2ZjMDA3NzZhOTQyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ir_B9a9Df5Gm0AAsgEtpj0OkSq9kcpPH3tnynUD5YHU'
    }
};

async function searchTMDB(query) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        return data.results.map(movie => new Movie(
            movie.id,
            movie.title,
            movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500',
            movie.release_date || 'Unknown',
            movie.genre_ids.join(', '),
            movie.director || 'Unknown',
            movie.actors || 'Unknown',
            movie.vote_average || 'No rating'
        ));
        
    } catch (error) {
        console.error('Error fetching data from TMDB:', error);
    }
}

export async function fetchData(query) {
    if (!query) {
        return [];
    } else {
        return await searchTMDB(query);
    }
}