// Componente funcional que permite filtrar libros por género
const GenreFilter = ({ genresList, selectedGenres, handleGenreChange }) => {
  return (
    // Contenedor principal del filtro con estilo
    <div className="bg-black p-4 mb-4 text-center" style={{ backgroundColor: '#dbb377' }}>
      <div className="flex flex-wrap justify-center"> {/* Cambiado a justify-center para centrar */}
        {/* Itera sobre la lista de géneros para crear un checkbox para cada uno */}
        {genresList.map((genre) => (
          // Etiqueta para cada checkbox, clave única basada en el género
          <label key={genre} className="m-2 text-black">
            <input
              type="checkbox" // Tipo de entrada checkbox
              checked={selectedGenres.includes(genre)} // Verifica si el género está seleccionado
              onChange={() => handleGenreChange(genre)} // Llama a la función para manejar el cambio
              className="mr-2" // Margen a la derecha para separación
            />
            {genre} {/* Nombre del género */}
          </label>
        ))}
      </div>
    </div>
  );
};

// Exporta el componente para su uso en otras partes de la aplicación
export default GenreFilter;


  