import { useState } from 'react';

// Componente StarRating para mostrar las estrellas
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Número de estrellas completas
  const halfStar = rating % 1 !== 0; // Si hay media estrella
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Estrellas vacías

  return (
    <div className="flex">
      {/* Estrellas completas */}
      {[...Array(fullStars)].map((_, index) => (
        <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="#ffc107" stroke="black" viewBox="0 0 24 24" width="24" height="24" className="star">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      {/* Media estrella alineada a la izquierda */}
      {halfStar && (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffc107" stroke="black" viewBox="0 0 24 24" width="24" height="24" className="star">
          <defs>
            <clipPath id="half-star">
              <rect x="0" y="0" width="12" height="24" /> {/* Recorta a la mitad */}
            </clipPath>
          </defs>
          <g clipPath="url(#half-star)">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </g>
        </svg>
      )}
      {/* Estrellas vacías */}
      {[...Array(emptyStars)].map((_, index) => (
        <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="#e4e5e9" stroke="black" viewBox="0 0 24 24" width="24" height="24" className="star">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

// Componente Reviews.js para mostrar reseñas de ejemplo
const Reviews = ({ bookId }) => {
  // Ejemplo de reseñas preexistentes para distintos libros, incluyendo el promedio de calificaciones
  const exampleReviews = {
    'book1': {
      averageRating: 4.11,
      reviews: [
        { reviewer: 'Ana', comment: 'Qué bello que está escrito este libro. La historia en sí es muy desgarradora pero, aparte de eso, me encantó cómo Mary Shelley describió de una manera tan tierna y profunda los sentimientos humanos, la superficialidad que conduce al mundo y la necesidad innata de afecto que envuelve a todas las personas. Me encantó.', rating: 4 },
        { reviewer: 'Luis', comment: 'Interesante la parte de desarrollo del monstruo. Me esperaba algo mejor', rating: 3 },{ reviewer: 'Camila', comment: 'Es impresionante como un libro tan antiguo, aborda temas que actualmente están tan presentes! La búsqueda permanente del hombre, de experimentar con los límites de la ciencia…..el rechazo de lo distinto y la búsqueda de aprobación social. Es un libro que hace pensar en “quien es el monstruo en esta sociedad? Cuáles son las consecuencias de no hacernos responsables de nuestros actos u errores… ', rating: 5 },
      ],
    },
    'book2': {
      averageRating: 3.8,
      reviews: [
        { reviewer: 'Gabriel', comment: 'La Odisea me ha gustado muchísimo más que la Ilíada, ya que no se me hizo tan pesada. Sin embargo, considero que es necesario leer esta última primero para tener más contexto en este libro, ya que aparecen personajes del pasado y se deja en claro cuál fue el desenlace mismo de ellos. Es lo más recomendable.', rating: 4 },{ reviewer: 'Elena', comment: 'El primer texto clásico que leo y muy a mi pesar reconozco que me ha costado un poco. Por un lado muy contenta de haberlo leído y recordando momentazos épicos de la trama pero por otro un poco apenada porque no ha tenido el impacto que esperaba.', rating: 4 },{ reviewer: 'Eliza', comment: 'Quería abandonar el libro pero no me faltaba tanto como para justificarlo. Así que como si quitara una curita, entre más rápido mejor, decidí terminarlo y como esperaba, no me gustó. No es que sea terrible es que Ulises siempre me desagradó y esta historia solo lo confirmó.', rating: 2 },
      ],
    },
    'book3': {
      averageRating: 4.3,
      reviews: [
        { reviewer: 'Cecilia', comment: 'Un librazo apto para todo público, que les va a volar la mente y tiene una adaptación en camino, así que yo que ustedes lo leo desde ya. Además, estoy ansiosa por leer los siguientes libros de esta serie!', rating: 5 },{ reviewer: 'Emi', comment: 'Me gustó, fue bastante ágil su lectura. Sentía la tensión cuando tenía que sentirla y cuando me ponía a leer avanzaba super rápido. Pero la historia no me convenció, el por qué Pippa empezó a hacer su proyecto y que después fuera encontrando tantas cosas que la llevaban por buen camino así con demasiada facilidad me causó ruido.', rating: 3 },{ reviewer: 'Ángela', comment: 'No creo que sea un libro terrible, solo que es bastante adolescente e incluso infantil. Pienso que podría ser una buena forma de iniciar a alguien en la lectura o en los thrillers, pero dudo que estimule demasiado a lectores asiduos.', rating: 2 },
      ],
    },
    'book4': {
      averageRating: 4.7,
      reviews: [
        { reviewer: 'Ana', comment: 'El primer libro de una de mis sagas favoritas, estoy enamorada de Jace creo que es mi primer crush de los libros jaj', rating: 5 },{ reviewer: 'Naomi', comment: 'Al fin conocí el mundo de Cassandra Clare✨aún sigo pensando, ¿cómo fue que me demoré tanto en empezar a leer esta saga?. A pesar que solo he leído el primero me gustó. El libro lo sentí por partes un poco lento pero entiendo, ya que nos introduce personajes y todo lo relacionado al Mundo de la Sombras.', rating: 4 },{ reviewer: 'María', comment: 'Este libro no me dejó un buen sabor de boca. Básicamente, no me dejó ningún sabor de boca. O si me dejó un sabor, fue como el sabor del agua. No existía.', rating: 3 },
      ],
    },
    'book5': {
      averageRating: 4.29,
      reviews: [
        { reviewer: 'Luisa', comment: 'Este libro se convirtió en una experiencia fascinante para mí. Aunque al principio de la historia me resultaron irritantes algunas actitudes y comportamientos de Elizabeth, no puedo evitar destacar lo maravillosa que es como hermana; ¡ojalá todos tuviéramos una hermana como Lizzie!', rating: 5 },{ reviewer: 'Matthew', comment: 'Bueno, está bien. Básicamente, es un estudio de personajes de la Inglaterra del siglo XIX, la sociedad, el noviazgo, etc. No ocurre nada que resulte alucinante o fascinante. De hecho, no ocurre gran cosa.', rating: 3 },{ reviewer: 'Lisa', comment: 'Las escenas saltan de una escena a otra tan rápido que me marea y no puedo conectar con ninguno de los personajes. Elizabeth pasa la mayor parte de la novela sentada quejándose del Sr. Darcy y el Sr. Bingley sin hacer absolutamente nada para mejorar su situación. Al menos Jay Gatsby hizo algo con su amor...', rating: 1 },
      ],
    },
    'book6': {
      averageRating: 4.16,
      reviews: [
        { reviewer: 'Antonia', comment: 'No quería que se acabara.Sigo estando triste y siempre lo estaré porque Jo y Laurie no terminan juntos.También estoy enojada por haber visto la adaptación antes de leer el libro porque me creé otras expectativas.Amy merece mayor reconocimiento porque tiene un crecimiento impresionante. Igual siento que Florence Pugh le hizo justicia. (Greta Gerwig, en verdad).TE AMO JO.', rating: 5 },{ reviewer: 'Vale', comment: 'Me gusto mucho más de lo que esperaba. Jo obvio es mi favorita ❤La segunda parte me está costando un poco más, pero igual me esta gustando.', rating: 4 },{ reviewer: 'Cami', comment: 'Veamos, entiendo que se escribió en 1868, de verdad que lo entiendo. Soy muy consciente de la época y del rol de la mujer en ese momento. Pero Jane Eyre es previo a esos años y es algo por completo diferente. No los voy a comparar porque no es justo, son historias distintas. Solo quería ejemplificar que aun dentro del rol de la mujer en ese momento, se podía hacer algo que no fuera tan moralista.', rating: 3 },
      ],
    },
    // Puedes añadir más reseñas y promedios para otros libros
  };

  // Obtén las reseñas y el promedio del libro actual
  const bookReviews = exampleReviews[bookId] || { averageRating: 0, reviews: [] };
  const { averageRating, reviews } = bookReviews;

  return (
    <div className="mt-4 flex mx-10"> {/* Añadido mx-4 para mover el contenido a la derecha */}
      {/* Columna izquierda para la calificación promedio */}
      <div className="mr-8 flex flex-col items-start ml-10"> {/* Cambiado a items-start para alinear a la izquierda */}
        <h3 className="text-2xl ml-10 flex bg-gray-100 mt-2 rounded-lg font-bold">{averageRating.toFixed(1)}</h3>
        <div className ="bg-gray-100 flex rounded-lg p-2 mb-2 shadow-md"><StarRating rating={averageRating} /> 
         </div>{/* Estrellas para el promedio */}
      </div>

      {/* Reseñas de otros usuarios */}
      <div className="flex-1 mb-10">
        <h3 className="text-lg font-semibold text-center">Reseñas de otros usuarios:</h3>
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {reviews.map((review, index) => (
              <div key={index} className="p-4 border rounded shadow-lg bg-white flex flex-col items-center">
                <div className="flex items-center mb-2">
                  <img
                    src="https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-símbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=" // Imagen predeterminada genérica para los usuarios
                    alt="Avatar genérico"
                    className="w-12 h-12 rounded-full mr-2"
                  />
                  <p className="font-bold">{review.reviewer}</p>
                </div>
                <div className='mb-3 mt-3'>
                <StarRating rating={review.rating} /> {/* Estrellas de la reseña */}
                </div>
                <p>{review.comment}</p>
                
              </div>
            ))}
          </div>
        ) : (
          <p>No hay reseñas de otros usuarios por el momento.</p>
        )}
      </div>
    </div>
  );
};

export default Reviews; 
