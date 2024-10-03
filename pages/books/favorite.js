import React, { useState, useEffect } from 'react';
import books from '../../components/BookData'; // Importa los datos de los libros
import Book from '../../components/Book'; // Importa el componente Book
import Footer from '../../components/Footer'; // Importa el pie de página
import FavoriteNavBar from '../../components/FavoriteNavBar'; // Asegúrate de que la ruta sea correcta
import GenreFilter from '../../components/GenreFilter'; // Importa el filtro de géneros
import Favorite from '../../components/Favorite'; // Importa el componente Favorite

const FavoriteBooks = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]); // Estado para almacenar los libros favoritos
  const [selectedGenres, setSelectedGenres] = useState([]); // Estado para géneros seleccionados

  // Lista de géneros definidos manualmente
  const genresList = [
   'Ficción',
  'Ciencia Ficción',
  'Fantasía',
  'Romance',
  'Horror',
  'Adventura',
  'Política',
  'Clásica',
  'Poesía',
  'Literatura',
  ];

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || []; // Cargar los favoritos desde localStorage
    const filteredBooks = books.filter((book) => savedFavorites.includes(book.id)); // Filtra los libros que están marcados como favoritos
    setFavoriteBooks(filteredBooks); // Actualiza el estado con los libros favoritos
  }, []);

  const handleGenreChange = (genre) => {
    setSelectedGenres((prevSelected) =>
      prevSelected.includes(genre)
        ? prevSelected.filter((g) => g !== genre)
        : [...prevSelected, genre]
    );
  };

  const toggleFavorite = (bookId) => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (savedFavorites.includes(bookId)) {
      const updatedFavorites = savedFavorites.filter((id) => id !== bookId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Actualiza localStorage
      setFavoriteBooks(favoriteBooks.filter((book) => book.id !== bookId)); // Actualiza el estado
    } else {
      savedFavorites.push(bookId);
      localStorage.setItem('favorites', JSON.stringify(savedFavorites)); // Actualiza localStorage
      setFavoriteBooks([...favoriteBooks, books.find(book => book.id === bookId)]); // Actualiza el estado
    }
  };

  const filteredBooks = favoriteBooks.filter((book) => {
    if (selectedGenres.length === 0) return true; // Si no hay géneros seleccionados, devuelve todos los libros
    return selectedGenres.some((genre) => book.genres.includes(genre)); // Filtra por géneros seleccionados
  });

  return (
    <div className="m-0 p-0 min-h-screen flex flex-col bg-gray-100">
      <FavoriteNavBar /> {/* Muestra la barra de navegación */}
      <div className="bg-yellow-50 p-10">
        <h1 className="text-3xl font-bold mb-4 text-center mt-4">Mis Libros Favoritos</h1>
      </div>
      <title>Mis Favoritos</title>
      <GenreFilter
        genresList={genresList}
        selectedGenres={selectedGenres}
        handleGenreChange={handleGenreChange}
      />
      <div className="flex flex-col items-center">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="flex items-center justify-between mb-6 w-500 h-150">
              <Book book={book} /> {/* Muestra cada libro favorito */}
              <div className='ml-4'>
              <Favorite 
                isFavorite={true} 
                onToggle={() => toggleFavorite(book.id)} 
              /> {/* Corazón para alternar favoritos */}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 p-24 mb-24 ">No tienes libros favoritos aún.</p> // Mensaje si no hay libros favoritos
        )}
      </div>

      <Footer /> {/* Muestra el pie de página */}
    </div>
  );
};

export default FavoriteBooks; // Exporta el componente
