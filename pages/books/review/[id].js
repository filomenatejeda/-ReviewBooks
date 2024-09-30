// Importa el hook useRouter de Next.js para acceder a la información de la ruta
import { useRouter } from 'next/router';
// Importa Link para permitir la navegación entre páginas
import Link from 'next/link'; 
// Importa useState para manejar el estado del componente
import { useState } from 'react';
// Importa la lista de libros desde BookData
import books from '../../../components/BookData'; 
// Importa el componente StarRating para mostrar la calificación del libro
import StarRating from '../../../components/StarRating'; 

// Componente principal para la revisión de un libro
const BookReview = () => {
  const router = useRouter();
  const { id } = router.query; // Obtiene el ID del libro desde la ruta
  const bookIndex = books.findIndex(b => b.id === id); // Encuentra el índice del libro por ID
  const book = books[bookIndex]; // Obtiene el libro correspondiente al índice

  // Estado para la reseña, inicia con la reseña existente o una cadena vacía
  const [review, setReview] = useState(book?.review || ''); 

  // Función para manejar el envío del formulario
  const handleReviewSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    // Almacena la reseña en el objeto del libro
    if (bookIndex !== -1) {
      books[bookIndex].review = review; // Guarda la reseña en la estructura de datos
    }
    // Redirige al usuario a la página de sinopsis del libro
    router.push(`/books/synopsis/${id}`);
  };

  // Manejo de carga si el libro no se encuentra
  if (!book) return <p>Cargando...</p>; 

  return (
    <div className="p-4">
      {/* Breadcrumb de navegación para la localización dentro de la aplicación */}
      <div className="mb-4 p-4 bg-gray-800 text-white rounded">
        <Link href={`/`}>
          <a className="text-blue-400 hover:underline">Home</a> {/* Enlace a la página principal */}
        </Link>
        <span> &gt; </span> {/* Flecha de separación */}
        <Link href={`/books/synopsis/${id}`}>
          <a className="text-blue-400 hover:underline">{book.title}</a> {/* Enlace al título del libro */}
        </Link>
        <span> &gt; Review</span> {/* Flecha indicando la navegación actual */}
      </div>

      <div className="flex flex-col md:flex-row items-center mb-4"> {/* Contenedor para el diseño de imagen y texto */}
        {book.imageUrl && ( // Agrega la imagen del libro si está disponible
          <img 
            src={book.imageUrl} 
            alt={book.title} 
            className="w-50 h-60 object-cover mb-4 md:mr-8" // Ajuste de tamaño y márgenes
          />
        )}
        <div className="text-center md:text-left"> {/* Contenedor para el título y el autor */}
          <h1 className="text-2xl font-bold">{book.title}</h1> {/* Título del libro */}
          <h2 className="text-xl font-medium text-gray-700">{book.author}</h2> {/* Autor del libro */}
        </div>
      </div>
      
      <StarRating bookId={book.id} /> {/* Componente que permite calificar el libro */}
      
      {/* Formulario para escribir la reseña */}
      <form onSubmit={handleReviewSubmit} className="mt-4">
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)} // Actualiza el estado de la reseña al escribir
          placeholder="Escribe tu reseña aquí..."
          className="border border-gray-300 rounded p-2 w-full h-48" // Estilo para el textarea
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
          Enviar Reseña
        </button>
      </form>
    </div>
  );
};

// Exporta el componente BookReview para su uso en otras partes de la aplicación
export default BookReview;
