import { useEffect, useState } from 'react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [genres, setGenres] = useState('');
  const [year, setYear] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Cargar los libros desde Local Storage al iniciar el componente
    const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(savedBooks);
  }, []);

  const handleAddBook = (e) => {
    e.preventDefault();

    // Crear un nuevo libro con los datos ingresados
    const newBook = {
      id: books.length + 1,
      title,
      author,
      imageUrl,
      synopsis,
      genres,
      year,
    };

    // Actualizar el estado con el nuevo libro agregado
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);

    // Guardar los libros en Local Storage
    localStorage.setItem('books', JSON.stringify(updatedBooks));

    // Limpiar los campos del formulario
    setTitle('');
    setAuthor('');
    setImageUrl('');
    setSynopsis('');
    setGenres('');
    setYear('');
  };

  return (
    <div className="p-4 bg-gray-100">
      {/* Formulario para ingresar detalles del libro */}
      <form onSubmit={handleAddBook} className="mb-4">
        <div className="mb-2">
          <label className="block font-semibold">Título del Libro:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block font-semibold">Autor:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block font-semibold">Géneros (separados por comas):</label>
          <input
            type="text"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block font-semibold">URL de la Imagen:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block font-semibold">Año de Publicación:</label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full p-2 border rounded"
            required
            pattern="\d{4}"
            title="Introduce un año válido (por ejemplo, 2023)"
          />
        </div>
        <div className="mb-2">
          <label className="block font-semibold">Sinopsis:</label>
          <textarea
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
            className="w-full p-2 border rounded"
            rows="4"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Agregar Libro
        </button>
      </form>

      {/* Mostrar la lista de libros agregados */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Libros Agregados:</h2>
        {books.length === 0 ? (
          <p>No hay libros agregados aún.</p>
        ) : (
          <ul>
            {books.map((book) => (
              <li key={book.id} className="mb-2 p-2 border rounded shadow-sm">
                <p><strong>Título:</strong> {book.title}</p>
                <p><strong>Autor:</strong> {book.author}</p>
                <p><strong>Géneros:</strong> {book.genres}</p>
                <p><strong>Año de Publicación:</strong> {book.year}</p>
                <p><strong>Sinopsis:</strong> {book.synopsis}</p>
                {book.imageUrl && (
                  <img src={book.imageUrl} alt={book.title} className="w-20 h-20 object-cover mt-2" />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddBook;
