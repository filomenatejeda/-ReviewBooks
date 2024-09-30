// components/NavBar.js
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="mb-0 p-5 bg-gray-800 text-white shadow-md">
      <Link href={`/`}>
        <span className="text-blue-400 hover:underline cursor-pointer">Home</span>
      </Link>
      <span className="mx-2"> &gt; </span>
      <span className="text-gray-300">Mis Libros Calificados</span>
    </nav>
  );
};

export default NavBar;
