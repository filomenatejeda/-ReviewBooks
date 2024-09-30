import { useState } from 'react';
import books from './BookData.js'; // Asegúrate de importar la lista de libros
import Book from './Book.js'; // Importa el componente Book

// Lista de géneros disponibles para los checkboxes
const genresList = [
  'Fiction',
  'Ciencia Ficción',
  'Fantasy',
  'Romance',
  'Horror',
  'Aventura'
];

export default function EjemploFilter() {
  const [filter, setFilter] = useState(''); // Estado para el filtro de búsqueda por texto
  const [visibleBooks, setVisibleBooks] = useState(10); // Controla cuántos libros mostrar inicialmente
  const [selectedGenres, setSelectedGenres] = useState([]); // Estado para los géneros seleccionados

  // Función para manejar cambios en los checkboxes de géneros
  const handleGenreChange = (genre) => {
    if (selectedGenres.includes(genre)) {
      // Si el género ya está seleccionado, lo eliminamos
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      // Si no está seleccionado, lo añadimos
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  // Función para cargar más libros (incrementa el número de libros visibles)
  const loadMoreBooks = () => {
    setVisibleBooks((prevVisibleBooks) => prevVisibleBooks + 10);
  };

  // Filtra los libros según el filtro de texto (título, autor, o géneros) y los géneros seleccionados
  const filteredBooks = books.filter((book) => {
    // Convertir la cadena de géneros en un array y eliminar espacios
    const bookGenres = book.genres.split(',').map((genre) => genre.trim());

    // Filtrar por título, autor o géneros en el campo de búsqueda
    const matchesFilter = book.title.toLowerCase().includes(filter.toLowerCase()) ||
                          book.author.toLowerCase().includes(filter.toLowerCase()) ||
                          bookGenres.some((genre) => genre.toLowerCase().includes(filter.toLowerCase()));

    // Filtrar por géneros seleccionados (checkboxes)
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.some((genre) => bookGenres.includes(genre));

    return matchesFilter && matchesGenre;
  });

  return (
    <div className='p-4 text-center bg-yellow-50 mt-0'>
      {/* Contenedor de búsqueda por texto y géneros */}
      <div className="flex items-center mb-4 bg-gray-800 p-4">
        {/* Contenedor del input con lupa */}
        <div className="relative w-50">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Buscar"
            className="border border-gray-300 rounded p-2 pl-10 w-full" // Espacio a la izquierda para la lupa
          />
          {/* Icono de lupa */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M12.9 14.32a8 8 0 111.41-1.41l5.09 5.1a1 1 0 01-1.42 1.42l-5.08-5.09zM8 14a6 6 0 100-12 6 6 0 000 12z" />
          </svg>
        </div>

        {/* Checkboxes para filtrar por género */}
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
      </div>

      {/* Lista de libros filtrados */}
      <div className="flex flex-col items-center">
        {filteredBooks
          .slice(0, visibleBooks) // Mostrar solo el número de libros controlado por visibleBooks
          .map((book) => (
            <Book key={book.id} book={book} />
          ))}
      </div>

      {/* Botón para cargar más libros */}
      {visibleBooks < filteredBooks.length && (
        <button 
          onClick={loadMoreBooks} 
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Cargar más
        </button>
      )}
    </div>
  );
}

