import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import books from '../../components/BookData';
import Book from '../../components/Book';
import Footer from '../../components/Footer';

const RatedBooks = () => {
  const [ratedBooks, setRatedBooks] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  
  // Lista de géneros definidos manualmente
  const genresList = [
    'Fiction',
    'Ciencia Ficción',
    'Fantasy',
    'Romance',
    'Horror',
    'Aventura'
  ];

  useEffect(() => {
    const filteredBooks = books.filter((book) => {
      const savedRating = localStorage.getItem(`starRating_${book.id}`);
      return savedRating && Number(savedRating) > 0;
    });
    setRatedBooks(filteredBooks);
  }, []);

  const handleGenreChange = (genre) => {
    setSelectedGenres(prevSelected =>
      prevSelected.includes(genre)
        ? prevSelected.filter(g => g !== genre) // Si el género ya está seleccionado, lo eliminamos
        : [...prevSelected, genre] // Si no está, lo agregamos
    );
  };

  const filteredBooks = ratedBooks.filter(book => {
    if (selectedGenres.length === 0) return true; // Si no hay géneros seleccionados, mostramos todos
    return selectedGenres.some(genre => book.genres.includes(genre)); // Filtra por géneros seleccionados
  });

  return (
    <div className="m-0 p-0 min-h-screen flex flex-col bg-gray-100"> {/* Fondo gris claro */}
      {/* Barra de navegación */}
      <nav className="mb-4 p-4 bg-gray-800 text-white shadow-md">
        <Link href={`/`}>
          <span className="text-blue-400 hover:underline cursor-pointer">Home</span>
        </Link>
        <span className="mx-2"> &gt; </span>
        <span className="text-gray-300">Mis Libros Calificados</span>
      </nav>

      <h1 className="text-3xl font-bold mb-8 text-center mt-8">Mis Libros Calificados</h1>
      
      {/* Sección de filtros con fondo gris */}
      <div className="bg-black p-4 mb-4" style={{ backgroundColor: '#dbb377' }}> {/* Fondo gris y padding */}
        {/* Checkboxes para filtrar por género */}
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

      <div className="flex flex-col items-center"> {/* Contenedor centralizado */}
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="mb-6 w-300"> {/* Limitar el ancho */}
              <Book book={book} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No has calificado ningún libro aún.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default RatedBooks;
