import { useState, useEffect } from 'react';
import books from './BookData.js';
import Book from './Book.js';
import Favorite from './Favorite.js'; // Importa el componente Favorite

const genresList = [
  'Ficción',
  'Ciencia Ficción',
  'Fantasía',
  'Romance',
  'Horror',
  'Aventura',
  'Política',
  'Clásica',
  'Poesía',
  'Literatura',
];

export default function EjemploFilter({ children }) {
  const [filter, setFilter] = useState('');
  const [visibleBooks, setVisibleBooks] = useState(10);
  const [selectedGenres, setSelectedGenres] = useState(children ? [children] : []);
  const [favorites, setFavorites] = useState([]);

  // Cargar favoritos desde localStorage al iniciar el componente
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Guardar favoritos en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleGenreChange = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const loadMoreBooks = () => {
    setVisibleBooks((prevVisibleBooks) => prevVisibleBooks + 10);
  };

  // Función para eliminar todos los filtros
  const clearFilters = () => {
    setFilter('');
    setSelectedGenres([]);
  };

  const filteredBooks = books.filter((book) => {
    const bookGenres = book.genres.split(',').map((genre) => genre.trim());
    const matchesFilter = book.title.toLowerCase().includes(filter.toLowerCase()) ||
                          book.author.toLowerCase().includes(filter.toLowerCase()) ||
                          bookGenres.some((genre) => genre.toLowerCase().includes(filter.toLowerCase()));
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.some((genre) => bookGenres.includes(genre));
    return matchesFilter && matchesGenre;
  });

  return (
    <div className='p-4 text-center bg-yellow-50 mt-0'>
      <div className="flex items-center mb-4 bg-gray-800 p-4">
        <div className="relative w-50">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Buscar"
            className="border border-gray-300 rounded p-2 pl-10 w-full"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M12.9 14.32a8 8 0 111.41-1.41l5.09 5.1a1 1 0 01-1.42 1.42l-5.08-5.09zM8 14a6 6 0 100-12 6 6 0 000 12z" />
          </svg>
        </div>

        <div className="flex flex-wrap justify-start ml-4">
          {genresList.map((genre) => (
            <label key={genre} className="m-2 text-white">
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

        {/* Botón para eliminar los filtros */}
        <button
          onClick={clearFilters}
          className="ml-auto p-2 rounded-full bg-transparent hover:bg-white text-white hover:text-black border border-white transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center">
        {filteredBooks.slice(0, visibleBooks).map((book) => (
          <div key={book.id} className="flex items-center justify-between w-full border-b py-2">
            <Book book={book} />
            <div className="ml-4">
              <Favorite 
                isFavorite={favorites.includes(book.id)} 
                onToggle={() => toggleFavorite(book.id)} 
              />
            </div>
          </div>
        ))}
      </div>

      {visibleBooks < filteredBooks.length && (
        <button onClick={loadMoreBooks} className="mt-4 p-2 bg-blue-500 text-white rounded">
          Cargar más
        </button>
      )}
    </div>
  );
}


