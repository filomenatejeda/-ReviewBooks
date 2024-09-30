// pages/books/rated.js
import React, { useState, useEffect } from 'react';
import books from '../../components/BookData';
import Book from '../../components/Book';
import Footer from '../../components/Footer';

import NavBar from '../../components/Navbar';
import GenreFilter from '../../components/GenreFilter';

const RatedBooks = () => {
  const [ratedBooks, setRatedBooks] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  // Lista de géneros definidos manualmente
  const genresList = [
    'Fiction',
    'Science Fiction',
    'Fantasy',
    'Romance',
    'Horror',
    'Adventure ',
  ];

  useEffect(() => {
    const filteredBooks = books.filter((book) => {
      const savedRating = localStorage.getItem(`starRating_${book.id}`);
      return savedRating && Number(savedRating) > 0;
    });
    setRatedBooks(filteredBooks);
  }, []);

  const handleGenreChange = (genre) => {
    setSelectedGenres((prevSelected) =>
      prevSelected.includes(genre)
        ? prevSelected.filter((g) => g !== genre)
        : [...prevSelected, genre]
    );
  };

  const filteredBooks = ratedBooks.filter((book) => {
    if (selectedGenres.length === 0) return true;
    return selectedGenres.some((genre) => book.genres.includes(genre));
  });

  return (
    <div className="m-0 p-0 min-h-screen flex flex-col bg-gray-100">
      <NavBar />
      <div className="bg-yellow-50 p-10">
        <h1 className="text-3xl font-bold mb-8 text-center mt-8">Mis Libros Calificados</h1>
      </div>
      <GenreFilter
        genresList={genresList}
        selectedGenres={selectedGenres}
        handleGenreChange={handleGenreChange}
      />
      <div className="flex flex-col items-center">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="mb-6 w-500 h-150">
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

