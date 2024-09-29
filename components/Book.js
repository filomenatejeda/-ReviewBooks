// components/Book.js

import React from 'react';
import Link from 'next/link'; // Asegúrate de importar Link de next/router
import StarRating from './StarRating'; // Asegúrate de que este componente exista
import books from './BookData'; // Importa los datos de los libros

const Book = ({ book }) => {
  return (
    <div className="border p-5 mb-4 w-full flex flex-row items-start bg-white shadow"> {/* Añadido bg-white y shadow */}
      {book.imageUrl && (
        <Link href={`/books/review/${book.id}`}>
          <img 
            src={book.imageUrl} 
            alt={book.title} 
            className="w-48 h-48 object-cover cursor-pointer mr-5 mb-2" // Añadir margen a la derecha
          />
        </Link>
      )}
      <div className="flex flex-col w-full"> {/* Contenedor para texto y botones */}
        <h3 className="text-lg font-semibold text-left mb-1 ml-4">{book.title}</h3>
        <h3 className="text-sm font-light text-left text-gray-500 mb-2 ml-4">{book.author}</h3> {/* Ajustes en el autor */}
        
        {/* Contenedor para centrar las estrellas */}
        <div className="flex justify-left mb-2 p-5"> 
          <StarRating bookId={book.id} /> {/* Asegúrate de que este componente exista */}
        </div>
        <div className="flex mt-2 justify-end"> {/* Justificar los botones a la derecha */}
          <Link href={`/books/review/${book.id}`}>
            <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 mr-2">
              Escribir Reseña
            </button>
          </Link>
          <Link href={`/books/synopsis/${book.id}`}>
            <button className="bg-green-500 text-white rounded p-2 hover:bg-green-600">
              Ver Sinopsis
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
