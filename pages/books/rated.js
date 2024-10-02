import React, { useState, useEffect } from 'react';
import books from '../../components/BookData'; // Importa los datos de los libros
import Book from '../../components/Book'; // Importa el componente Book
import Footer from '../../components/Footer'; // Importa el pie de página
import NavBar from '../../components/Navbar'; // Importa la barra de navegación
import GenreFilter from '../../components/GenreFilter'; // Importa el filtro de géneros

const RatedBooks = () => {
  const [ratedBooks, setRatedBooks] = useState([]); // Estado para almacenar los libros calificados
  const [selectedGenres, setSelectedGenres] = useState([]); // Estado para géneros seleccionados

  // Lista de géneros definidos manualmente
  const genresList = [
    'Fiction',
    'Science Fiction',
    'Fantasy',
    'Romance',
    'Horror',
    'Adventure',
  ];

  useEffect(() => {
    const filteredBooks = books.filter((book) => {
      const savedRating = localStorage.getItem(`starRating_${book.id}`);
      return savedRating && Number(savedRating) > 0; // Filtra libros que tienen una calificación guardada
    });
    setRatedBooks(filteredBooks); // Actualiza el estado con los libros calificados
  }, []);

  const handleGenreChange = (genre) => {
    setSelectedGenres((prevSelected) =>
      prevSelected.includes(genre) // Si el género ya está seleccionado, lo elimina
        ? prevSelected.filter((g) => g !== genre)
        : [...prevSelected, genre] // Si no está seleccionado, lo añade
    );
  };

  const filteredBooks = ratedBooks.filter((book) => {
    if (selectedGenres.length === 0) return true; // Si no hay géneros seleccionados, devuelve todos los libros
    return selectedGenres.some((genre) => book.genres.includes(genre)); // Filtra por géneros seleccionados
  });

  return (
    <div className="m-0 p-0 min-h-screen flex flex-col bg-gray-100">
      <NavBar /> {/* Muestra la barra de navegación */}
      <div className="bg-yellow-50 p-10">
        <h1 className="text-3xl font-bold mb-8 text-center mt-8">Mis Libros Calificados</h1>
      </div>
      <GenreFilter
        genresList={genresList}
        selectedGenres={selectedGenres}
        handleGenreChange={handleGenreChange}
      />
      {/* Contenedor para los libros */}
      <div className="flex flex-wrap justify-center">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="mb-6 mx-4 w-1/2 md:w-90">
              {/* Ajustar el tamaño del cuadro del libro */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 h-70 flex flex-col">
                <Book book={book} /> {/* Muestra cada libro calificado */}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No has calificado ningún libro aún.</p> // Mensaje si no hay libros calificados
        )}
      </div>

      <Footer /> {/* Muestra el pie de página */}
    </div>
  );
};

export default RatedBooks; // Exporta el componente

