import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import MovieCard from './components/MovieCard.jsx'

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className='App'>
      <NavBar setSearchResults={setSearchResults}/>
      <div className="SearchResults">
        {searchResults.map(
          result => (
            <MovieCard key={result.id} movie={result}/>
          )
        )}
      </div>
    </div>
  )
}

export default App;
