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
import Footer from '../../../components/Footer.js';

<title>Escribir Reseña</title>
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
    
    <div className="p-0 bg-gray-200 min-h-screen"> {/* Fondo gris y mínimo alto para ocupar toda la pantalla */}
      {/* Breadcrumb de navegación para la localización dentro de la aplicación */}
      <div className="mb-4 p-4 bg-gray-800 text-white flex justify-between items-center">
  <div className="flex items-center">
    <Link href={`/`}>
      <a className="text-blue-400 hover:underline ml-2">Inicio</a> {/* Enlace a la página principal */}
    </Link>
    <span className="mx-2"> &gt; </span> {/* Flecha de separación */}
    <Link href={`/books/synopsis/${id}`}>
      <a className="text-blue-400 hover:underline">{book.title}</a> {/* Enlace al título del libro */}
    </Link>
    <span className="mx-2"> &gt; Escribir Reseña</span> {/* Flecha indicando la navegación actual */}
  </div>
  <h2 className="text-white text-2xl text-right">StarReview</h2>
</div>

      <title>Escribir Reseña</title>
      <div className="flex flex-col md:flex-row items-center mb-4 ml-16 "> {/* Contenedor para el diseño de imagen y texto */}
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
      <div className='ml-16'>
      <StarRating bookId={book.id} /> {/* Componente que permite calificar el libro */}
      </div>
      {/* Formulario para escribir la reseña */}
      <form onSubmit={handleReviewSubmit} className="mt-4 flex flex-col items-center">
  <textarea
    value={review}
    onChange={(e) => setReview(e.target.value)} // Actualiza el estado de la reseña al escribir
    placeholder="Escribe tu reseña aquí..."
    className="border border-gray-300 rounded p-2 w-full h-96 md:w-11/12" // Ajuste del tamaño del textarea y centrado
  />
  <div className="flex justify-center">
    <button className="mt-4 bg-blue-500 text-white py-2 px-2 rounded mb-4"> {/* Botón centrado */}
      Enviar Reseña
    </button>
  </div>
</form>
      <Footer className="w-full m-0 p-0 px-0" /> {/* Pie de página sin márgenes */}
    </div>
  );
};

// Exporta el componente BookReview para su uso en otras partes de la aplicación
export default BookReview;
