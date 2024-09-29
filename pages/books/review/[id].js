import { useRouter } from 'next/router';
import Link from 'next/link'; // Importamos Link para la navegación
import { useState } from 'react';
import books from '../../../components/BookData'; // Asegúrate de que la ruta sea correcta
import StarRating from '../../../components/StarRating'; // Asegúrate de que este componente exista

const BookReview = () => {
  const router = useRouter();
  const { id } = router.query; // Obtiene el ID del libro
  const bookIndex = books.findIndex(b => b.id === id); // Encuentra el índice del libro por ID
  const book = books[bookIndex]; // Obtiene el libro

  const [review, setReview] = useState(book?.review || ''); // Estado para la reseña, inicia con la reseña existente

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Almacenar la reseña en el objeto del libro
    if (bookIndex !== -1) {
      books[bookIndex].review = review; // Guarda la reseña en la estructura de datos (esto es solo un ejemplo)
    }
    // Redirigir a la página de sinopsis
    router.push(`/books/synopsis/${id}`);
  };

  if (!book) return <p>Cargando...</p>; // Manejo de carga si el libro no se encuentra

  return (
    <div className="p-4">
      {/* Breadcrumb de navegación */}
      <div className="mb-4 p-4 bg-gray-800 text-white rounded">
  <Link href={`/`}>
    <a className="text-blue-400 hover:underline">Home</a> {/* Link a la página principal */}
  </Link>
  <span> &gt; </span> {/* Flecha de separación */}
  <Link href={`/books/synopsis/${id}`}>
    <a className="text-blue-400 hover:underline">{book.title}</a> {/* Link al título del libro */}
  </Link>
  <span> &gt; Review</span> {/* Flecha indicando la navegación actual */}
</div>

      <div className="flex flex-col md:flex-row items-center mb-4"> {/* Usamos items-center para centrar verticalmente */}
        {book.imageUrl && ( // Agrega la imagen del libro
          <img 
            src={book.imageUrl} 
            alt={book.title} 
            className="w-50 h-60 object-cover mb-4 md:mr-8" // Ajusta el tamaño de la imagen y agrega margen
          />
        )}
        <div className="text-center md:text-left"> {/* Contenedor para el título y el autor */}
          <h1 className="text-2xl font-bold">{book.title}</h1> {/* Título del libro */}
          <h2 className="text-xl font-medium text-gray-700">{book.author}</h2> {/* Autor del libro */}
        </div>
      </div>
      
      <StarRating bookId={book.id} /> {/* Agrega el componente StarRating aquí */}
      
      {/* Formulario para escribir la reseña */}
      <form onSubmit={handleReviewSubmit} className="mt-4">
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Escribe tu reseña aquí..."
          className="border border-gray-300 rounded p-2 w-full h-48"
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
          Enviar Reseña
        </button>
      </form>
    </div>
  );
};

export default BookReview;
