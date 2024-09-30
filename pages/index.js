import NameFilter from '../components/EjemploFilter.js'; // Importa el componente de filtro
import Footer from '../components/Footer.js'; // Importa el componente del pie de página
import Link from 'next/link'; // Importa Link desde Next.js

export default function Home() {
  return (
    <>
      <div>
        <title>Review</title> {/* Título de la página */}
        <script src="https://cdn.tailwindcss.com"></script> {/* Carga Tailwind CSS */}
      </div>

      {/* Cuadro negro superior */}
      <div className="bg-gray-800 p-5 flex justify-between">
        {/* Link hacia la página de calificaciones */}
        <Link href="/books/rated" className="text-white text-xl underline">
          Mis Calificaciones
        </Link>
      </div>

      <div>
        <div className="p-5 " style={{ backgroundColor: '#dbb377' }}>
          <h1 className="text-center text-white p-5 text-5xl">El Catálogo Crítico</h1>
          <p className="text-center p-4 mb-0">
            "Opiniones para los Amantes de los Libros"
          </p>
        </div>

        {/* Filtro de búsqueda */}
        <NameFilter />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}


