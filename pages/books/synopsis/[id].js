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
    <div className="px-0"> {/* Quita el padding horizontal */}
      {/* Barra de navegación */}
      <div className="mb-4 p-4 bg-gray-800 text-white">
        <Link href={`/`}>
          <a className="text-blue-400 hover:underline">Home</a> {/* Link a la página principal */}
        </Link>
        <span> &gt; Sinopsis</span> {/* Flecha indicando la navegación actual */}
      </div>

      {/* Contenido de la sinopsis */}
      <div className="flex ml-4 flex-col md:flex-row items-start">
        {book.imageUrl && ( // Agrega la imagen del libro
          <img 
            src={book.imageUrl} 
            alt={book.title} 
            className="w-50 h-60 object-cover mb-4 md:mr-8" // Ajusta el tamaño de la imagen y agrega margen
          />
        )}
        <div className="flex-1">
          <div className="w-[1000px] h-[250px] p-3 border border-gray-300 rounded bg-white shadow-md"> {/* Cuadrado con fondo y sombra */}
            <h1 className="text-4xl font-bold">{book.title}</h1>
            <h2 className="text mb-3 font-bold text-gray-700">{book.author}</h2> {/* Autor del libro */}
            <StarRating bookId={book.id} /> {/* Agrega el componente StarRating aquí */}
            <p className="mt-2 text-gray-700">{book.date}</p> {/* Fecha de publicación */}
            <p className="mt-2 text-gray-700">{book.synopsis}</p> {/* Sinopsis del libro */}
          </div>
        </div>
      </div>

      {/* Reseña del libro */}
      <div className="mt-4 items-center"> {/* Añadido flex para centrar */}
  <p className="mt-2 text-gray-700 mb-4">{book.genres}</p> {/* Géneros del libro */}
  </div>
  <div className="mt-4 flex flex-col items-center"> {/* Añadido flex para centrar */}
  <div className="mb-10 w-[1000px] h-[350px] p-3  rounded bg-white shadow-md"> {/* Cuadrado con fondo y sombra */}
    <h3 className="text-lg font-semibold">Reseña:</h3>
    <p className="mt-2">{book.review || "No hay reseña disponible."}</p> {/* Muestra la reseña */}
  </div>
</div>


      <Footer />
    </div>
  );
};

export default BookSynopsis;
