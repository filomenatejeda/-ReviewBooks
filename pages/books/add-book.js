import { useState } from 'react';
import AddBook from '/components/AddBook';

const AddBookPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Agregar Nuevo Libro</h1>
      <AddBook />
    </div>
  );
};

export default AddBookPage;