// components/EjemploFilter.js

import { useState } from 'react';
import books from './BookData.js'; // Asegúrate de importar la lista de libros
import Book from './Book.js'; // Importa el componente Book

export default function NameFilter() {
  const [filter, setFilter] = useState('');

  return (
    <div className='p-4 text-center bg-yellow-50 mt-0'> {/* Fondo crema claro */}
      <div className="bg-gray-800 p-1"> {/* Cuadro negro */}
        {/* Puedes agregar cualquier contenido aquí si lo deseas */}
      </div>
      <div className="flex items-center mb-4 bg-gray-800 p-4">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Buscar"
          className="border border-gray-300 rounded p-2 mr-4" // Añadir margen a la derecha
        />
      </div>
      <div className="flex flex-col items-center">
        {books
          .filter((book) =>
            book.title.toLowerCase().includes(filter.toLowerCase()) || 
            book.genres.toLowerCase().includes(filter.toLowerCase()) ||
            book.author.toLowerCase().includes(filter.toLowerCase()) // Filtra por autor
          ) // Filtra por título, género o autor
          .map((book) => (
            <Book key={book.id} book={book} /> // Renderiza el componente Book
          ))}
      </div>
    </div>
  );
}
