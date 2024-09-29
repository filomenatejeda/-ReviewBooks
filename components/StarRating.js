import React, { useState, useEffect } from 'react';

// Componente que renderiza las estrellas para calificación
function StarRating({ bookId }) {
  // Estado para guardar la calificación seleccionada
  const [rating, setRating] = useState(0); // Calificación actual
  const [hover, setHover] = useState(0); // Almacena qué estrella está siendo "hovered"

  // Efecto para cargar la calificación guardada desde localStorage
  useEffect(() => {
    const savedRating = localStorage.getItem(`starRating_${bookId}`);
    if (savedRating) {
      setRating(Number(savedRating));
    }
  }, [bookId]);

  // Guardar la calificación en localStorage cuando se actualiza
  useEffect(() => {
    localStorage.setItem(`starRating_${bookId}`, rating);
  }, [rating, bookId]);

  const handleStarClick = (ratingValue) => {
    // Alternar la calificación: si ya está marcada, se desmarca; si no, se marca
    if (rating === ratingValue) {
      setRating(0); // Desmarcar si se hace clic en la misma estrella
    } else {
      setRating(ratingValue); // Marcar la nueva calificación
    }
  };

  return (
    <div className="star-rating flex items-center">
        {/* Mostrar la calificación seleccionada */}
      <p className="ml-1 mr-3">My rating: </p>
      {/* Creamos 5 estrellas */}
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            {/* La estrella en sí */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="star"
              width="30"
              height="30"
              onMouseEnter={() => setHover(ratingValue)} // Cambia el color al hacer hover
              onMouseLeave={() => setHover(0)} // Restablecer el color cuando el mouse sale
              onClick={() => handleStarClick(ratingValue)} // Alternar calificación al hacer clic
              style={{ cursor: "pointer", marginRight: "5px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.573 4.853a1 1 0 00.95.69h5.11c.969 0 1.371 1.24.588 1.81l-4.13 3.002a1 1 0 00-.364 1.118l1.573 4.854c.3.92-.755 1.688-1.54 1.118l-4.13-3.002a1 1 0 00-1.175 0l-4.13 3.002c-.784.57-1.839-.198-1.539-1.118l1.573-4.854a1 1 0 00-.364-1.118l-4.13-3.002c-.783-.57-.38-1.81.588-1.81h5.11a1 1 0 00.95-.69l1.573-4.853z"
              />
            </svg>
          </label>
        );
      })}

      {/* Mostrar la calificación seleccionada */}
    </div>
  );
}

export default StarRating;
