// components/GenreFilter.js
const GenreFilter = ({ genresList, selectedGenres, handleGenreChange }) => {
    return (
      <div className="bg-black p-4 mb-4" style={{ backgroundColor: '#dbb377' }}>
        <div className="flex flex-wrap justify-start ml-4">
          {genresList.map((genre) => (
            <label key={genre} className="m-2 text-black">
              <input
                type="checkbox"
                checked={selectedGenres.includes(genre)}
                onChange={() => handleGenreChange(genre)}
                className="mr-2"
              />
              {genre}
            </label>
          ))}
        </div>
      </div>
    );
  };
  
  export default GenreFilter;
  