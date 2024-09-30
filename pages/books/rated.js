import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import books from '../../components/BookData';
import Book from '../../components/Book';
import Footer from '../../components/Footer';

const RatedBooks = () => {
  const [ratedBooks, setRatedBooks] = useState([]);

  useEffect(() => {
    const filteredBooks = books.filter((book) => {
      const savedRating = localStorage.getItem(`starRating_${book.id}`);
      return savedRating && Number(savedRating) > 0;
    });
    setRatedBooks(filteredBooks);
  }, []);

  return (
    <div className="m-0 p-0 min-h-screen flex flex-col"> {/* Eliminar márgenes y padding */}
      {/* Barra de navegación */}
      <nav className="mb-4 p-4 bg-gray-800 text-white">
        <Link href={`/`}>
          <span className="text-blue-400 hover:underline cursor-pointer">Home</span>
        </Link>
        <span> &gt; </span>
        <span className="text-gray-300">Mis Libros Calificados</span>
      </nav>

      <h1 className="text-3xl font-bold mb-8 text-center mt-8">Mis Libros Calificados</h1>
      {ratedBooks.length > 0 ? (
        ratedBooks.map((book) => (
          <div key={book.id} className="mb-4">
            <Book book={book} />
            {/* Puedes eliminar esta línea si no deseas mostrar la calificación */}
            {/* <p className="mt-2"></p> */}
          </div>
        ))
      ) : (
        <p>No has calificado ningún libro aún.</p>
      )}
      <Footer />
    </div>
  );
};

export default RatedBooks;
