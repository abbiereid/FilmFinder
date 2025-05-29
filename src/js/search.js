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
        await fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
        }
    catch (error) {
        console.error('Error fetching data from TMDB:', error);
    }
}

export async function fetchData(query) {
    if (!query) {
        console.log("No query provided");
        return;
    } else {
        await searchTMDB(query);
    }
}