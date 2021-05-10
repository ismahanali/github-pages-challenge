import React, { useEffect, useState } from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import AllMovies from './components/AllMovies';
import MovieDirections from './components/MovieDirections';
import NominationDirections from './components/NominationDirections';
import SearchForm from './components/SearchForm';
import AddNominations from './components/AddNominations';
import RemoveNomination from './components/RemoveNomination';




const App = () => {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest =  async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f46fa659`;
    const results = await fetch(url);
    const resultsJson = await results.json();

    if (resultsJson.Search) {
      setMovies(resultsJson.Search)
    }
    
    
  };

  useEffect (()=>{
    getMovieRequest(searchValue);
  }, [searchValue]);

 

  const addNominatedMovie = (movie)=>{
    const nominationList = [...nominations, movie];
    setNominations(nominationList);
  };

  const removeNominatedMovie = (movie) => {
    const nominationList = nominations.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
      );

      setNominations(nominationList);
  };

  // App Below
  return <div className='container-fluid movie-app'>
    {/* First Page */}
    <div className="main-hero">
    <div className="first-page-contents">
            <h1>
                The Shoppies Nominations
            </h1>
            <p>
                We've branched out into movie award shows! Help us by nominating your faves.
            </p>
            <a href="#second">
            <button>
                Start   
            </button>
            </a>
        </div>
    </div>

    {/* Second Section  */}
   <div id ="second" className="second-page">
      <MovieDirections/>
      <div className="search-container">
      <SearchForm searchValue={searchValue} setSearchValue ={setSearchValue} />
      </div>
     
      <div className="movie-container">
      <AllMovies movies ={movies} handleNominationsClick={addNominatedMovie} nominationComponent={AddNominations}/>
    </div>
    
    </div>


    {/* Nominations Page */}
    <div className="third-page">
        <div className="nomination-header">
        <NominationDirections />
        </div>
        <div className="movie-container">
            <AllMovies movies ={nominations} handleNominationsClick={removeNominatedMovie} 
          nominationComponent={RemoveNomination}/>
        </div>
    </div>
    
  </div>;
}


export default App;
