import { useRouter } from 'next/router';
import Link from 'next/link';
import books from '../../../components/BookData';
import StarRating from '../../../components/StarRating';
import Footer from '../../../components/Footer.js';
import Reviews from '../../../components/Reviews';
import { useState, useEffect } from 'react'; 
import Favorite from '../../../components/Favorite'; 

const BookSynopsis = () => {
  const router = useRouter();
  const { id } = router.query; 
  const book = books.find(b => b.id === id);

  // Estado para manejar los favoritos
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  // Cargar favoritos desde localStorage al iniciar el componente
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Efecto para comprobar si el libro está marcado como favorito
  useEffect(() => {
    setIsFavorite(favorites.includes(book.id)); // Verifica si el libro actual está en los favoritos
  }, [favorites, book.id]); // Depende de favorites y book.id

  // Guardar favoritos en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Función para manejar el marcado de favoritos
  const toggleFavorite = (bookId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(bookId)
        ? prevFavorites.filter((id) => id !== bookId)
        : [...prevFavorites, bookId]
    );
  };

  // Manejo de carga si el libro no se encuentra
  if (!book) return <p>Cargando...</p>;

  // Función para manejar el clic en un género
  const handleGenreClick = (genre) => {
    router.push(`/?genre=${encodeURIComponent(genre)}`);
  };

  return (
    <div className="px-0 bg-gray-100">
  {/* Barra de navegación */}
  <nav className="mb-4 p-4 bg-gray-800 text-white flex justify-between items-center">
    <div className="flex items-center">
      <Link href={`/`} className="text-blue-400 hover:underline">
        Inicio
      </Link>
      <span className="mx-2"> &gt; Sinopsis</span>
    </div>
    <h2 className="text-white text-2xl">StarReview</h2>
  </nav>
      {/* Título principal de la página */}
      <h1 className="text-3xl font-bold text-center mb-3">Sinopsis</h1>

      {/* Contenido de la sinopsis */}
      <div className="flex ml-8 flex-col md:flex-row items-start">
        <div className="flex flex-col items-center w-full">
          {book.imageUrl && (
            <img 
              src={book.imageUrl} 
              alt={book.title} 
              className="w-60 h-70 object-cover mb-1"
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
          <div className="mb-1 w-[1000px] min-h-[300px] mr-10 p-3 border border-gray-300 rounded bg-white shadow-md flex flex-col justify-center">
            <h2 className="text-4xl font-bold flex items-center">
              {book.title}
              <div className='ml-4'>
                <Favorite 
                  isFavorite={isFavorite} 
                  onToggle={() => toggleFavorite(book.id)} // Pasa el id del libro
                />
              </div>
            </h2>
            <h3 className="mb-3 font-bold text-gray-700">{book.author}</h3>
            <StarRating bookId={book.id} />
            <p className="mt-2 text-gray-700">{book.date}</p>
            <p className="mt-2 text-gray-700">{book.synopsis}</p>
          </div>
          {/* Géneros del libro */}
          <p className="mt-4 text-gray-700 text-center">Géneros:  
            {book.genres.split(', ').map((genre) => (
              <span 
                key={genre} 
                className="cursor-pointer text-blue-500 hover:underline" 
                onClick={() => handleGenreClick(genre)} 
              >
                {genre}
              </span>
            )).reduce((prev, curr) => [prev, ', ', curr])}
          </p>
          <div className="mt-4 mr-10 flex justify-end">
            <div className="mb-8 w-[1000px] min-h-[100px] p-3 rounded bg-white shadow-md">
              <h3 className="text-lg font-semibold">Reseña:</h3>
              <p className="mt-2">{book.review || "No hay reseña disponible."}</p>
            </div>
          </div>
        </div>
      </div>
      <Reviews bookId={id} />
      <Footer />
    </div>
  );
};

// Exporta el componente BookSynopsis para su uso en otras partes de la aplicación
export default BookSynopsis;
