
import Link from 'next/link';

// Componente funcional NavBar que representa la barra de navegación de la aplicación
const FavoriteNavBar = () => {
  return (
    // Contenedor principal de la barra de navegación
    <nav className="mb-0 p-5 bg-gray-800 text-white shadow-md">
      {/* Enlace a la página principal de la aplicación */}
      <Link href={`/`}>
        {/* Texto que sirve como enlace, cambia de color al pasar el mouse y subraya el texto */}
        <span className="text-blue-400 hover:underline cursor-pointer">Inicio</span>
      </Link>
      {/* Separador visual entre enlaces */}
      <span className="mx-2"> &gt; </span>
      {/* Texto estático que indica la ubicación actual en la navegación */}
      <span className="text-gray-300">Mis Favoritos</span>
    </nav>
  );
};

// Exporta el componente NavBar para su uso en otras partes de la aplicación
export default FavoriteNavBar;

