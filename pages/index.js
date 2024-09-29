import NameFilter from '../components/EjemploFilter.js';
import Footer from '../components/Footer.js';

export default function Home() {
  return (
    <>

      <div>
        <title>Review</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </div>
      <div className="bg-gray-800 p-5"> {/* Cuadro negro */}
  {/* Puedes agregar cualquier contenido aquí si lo deseas */}
      </div>

      <div>
        <div className="p-5 " style={{ backgroundColor: '#dbb377' }}>
        <h1 className="text-center text-white p-5 text-5xl" > El Catálogo Crítico</h1>
          <p className="text-center p-4 mb-0">
          Opiniones para los Amantes de los Libros"
          </p>
        </div>
        <NameFilter />
        <Footer /> {/* Añade el footer aquí */}
      </div>
    </>
  );
}
