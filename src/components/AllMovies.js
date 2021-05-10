import React from 'react';

const AllMovies = (props) => {
	const NominationComponent = props.nominationComponent
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='movie-options image-container image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<span className="release-year">{movie.Released}</span>
                    <div 
					onClick={() => props.handleNominationsClick(movie)}
					className="overlay">
							
						<NominationComponent/>
                    </div>
					

				</div>
				
			))}
		</>
	);
};

export default AllMovies;