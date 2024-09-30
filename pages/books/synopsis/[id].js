import { useRouter } from 'next/router';
import Link from 'next/link'; // Asegúrate de importar Link
import books from '../../../components/BookData'; // Asegúrate de que la ruta sea correcta
import StarRating from '../../../components/StarRating'; // Asegúrate de que este componente exista
import Footer from '../../../components/Footer.js';

const BookSynopsis = () => {
  const router = useRouter();
  const { id } = router.query; // Obtiene el ID del libro
  const book = books.find(b => b.id === id); // Encuentra el libro por ID

  if (!book) return <p>Cargando...</p>; // Manejo de carga si el libro no se encuentra

  return (
    <div className="px-0 bg-gray-100"> {/* Quita el padding horizontal */}
      {/* Barra de navegación */}
      <nav className="mb-4 p-4 bg-gray-800 text-white">
        <Link href={`/`}>
          <a className="text-blue-400 hover:underline">Home</a> {/* Link a la página principal */}
        </Link>
        <span> &gt; Sinopsis</span> {/* Flecha indicando la navegación actual */}
      </nav>

      {/* Título principal de la página */}
      <h1 className="text-3xl font-bold text-center mb-6">Sinopsis</h1> {/* Título centrado */}

      {/* Contenido de la sinopsis */}
      <div className="flex ml-8 flex-col md:flex-row items-start">
        <div className="flex flex-col items-center w-full"> {/* Contenedor para centrar imagen */}
          {book.imageUrl && ( // Agrega la imagen del libro
            <img 
              src={book.imageUrl} 
              alt={book.title} 
              className="w-60 h-70 object-cover mb-1" // Ajusta el tamaño de la imagen y agrega margen
            />
          )}
          {/* Botón "Escribir Reseña" */}
          <Link href={`/books/review/${book.id}`}>
            <button className="mt-2 px-5 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200">
              Escribir Reseña
            </button>
          </Link>
        </div>
        
        <div className="flex-1">
          <div className="mb-1 w-[1000px] h-[300px] mr-10 p-3 border border-gray-300 rounded bg-white shadow-md flex flex-col justify-center"> {/* Cuadrado con fondo y sombra */}
            <h2 className="text-4xl font-bold">{book.title}</h2>
            <h3 className="mb-3 font-bold text-gray-700">{book.author}</h3> {/* Autor del libro */}
            <StarRating bookId={book.id} /> {/* Agrega el componente StarRating aquí */}
            <p className="mt-2 text-gray-700">{book.date}</p> {/* Fecha de publicación */}
            <p className="mt-2 text-gray-700">{book.synopsis}</p> {/* Sinopsis del libro */}
           
          </div>
           {/* Géneros del libro */}
           <p className="mt-4 text-gray-700 text-center">Géneros: {book.genres}</p> {/* Géneros del libro */ }
          <div className="mt-2 mr-10 flex justify-end"> {/* Reduce el margen superior */}
        <div className="mb-10 w-[1000px] h-[350px] p-3 rounded bg-white shadow-md"> {/* Cuadrado con fondo y sombra */}
          <h3 className="text-lg font-semibold">Reseña:</h3>
          <p className="mt-2">{book.review || "No hay reseña disponible."}</p> {/* Muestra la reseña */}
        </div>
      </div>
         
        </div>
      </div>

   
      

      <Footer />
    </div>
  );
};

export default BookSynopsis;
