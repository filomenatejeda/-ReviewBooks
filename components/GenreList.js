// Importa useRouter de Next.js
import { useRouter } from 'next/router';

const GenreList = ({ genres }) => {
  const router = useRouter();

  // Manejar el clic en el género
  const handleGenreClick = (genre) => {
    // Redirigir a la página de índice con el filtro de género
    router.push(`/index?genre=${encodeURIComponent(genre)}`);
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">Géneros:</h2>
      <div className="flex flex-wrap">
        {genres.map((genre) => (
          <span
            key={genre}
            className="cursor-pointer text-blue-500 hover:underline mx-2"
            onClick={() => handleGenreClick(genre)}
          >
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GenreList;
