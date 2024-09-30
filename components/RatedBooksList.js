// components/RatedBooksList.js
import React from 'react';
import Book from './Book';

const RatedBooksList = ({ filteredBooks }) => {
  return (
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
  );
};

export default RatedBooksList;
