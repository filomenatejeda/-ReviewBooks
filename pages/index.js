import { useRouter } from 'next/router';

import NameFilter from '../components/EjemploFilter.js'; // Importa el componente de filtro
import Footer from '../components/Footer.js'; // Importa el componente del pie de página
import Link from 'next/link'; // Importa Link desde Next.js

export default function Home() {
  //################################
  // Usa el router para obtener el género ya elegido (que vendrá desde la página de sinopsis), estará vacío si se ingresa a la página sin clcikear en un género allí
  const router = useRouter();
  const { genre } = router.query;


  return (
    <>
      <div>
        <title>Inicio</title> {/* Título de la página */}
        <script src="https://cdn.tailwindcss.com"></script> {/* Carga Tailwind CSS */}
      </div>

      {/* Cuadro negro superior */}
      <div className="bg-gray-800 p-5 flex justify-between">
        {/* Link hacia la página de calificaciones */}
        <Link href="/books/rated" className="text-white text-xl underline">
          Mis Calificaciones
        </Link>
        <Link href="/books/add-book" className="text-white text-xl underline">
        Agregar Libro
        </Link>
        <Link href="/books/favorite" className="text-white text-xl underline">
          Mis Favoritos
        </Link>
      </div>

      <div>
        <div className="p-5 " style={{ backgroundColor: '#dbb377' }}>
          <h1 className="text-center text-white p-4 text-5xl">StarReview: El Catálogo Crítico</h1>
          <p className="text-center p-2 mb-0 text-2xl">
            "Opiniones para los Amantes de los Libros"
          </p>
        </div>

        {/* Filtro de búsqueda */}
        <NameFilter>
          {/* ############################### */}
          {/* Pasa el género obtenido al filtro para aplicar el filtro */}
          {genre}
        </NameFilter>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}









