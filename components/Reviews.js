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
    'book7': {
      averageRating: 4.3,
      reviews: [
        { reviewer: 'Rajat', comment: 'En mi opinión, el objetivo de esta reseña es muy claro: convencerte a TI de que leas este libro. ¡Sí, a ti! No pierdas más el tiempo. Hazte con una copia.', rating: 5 },{ reviewer: 'Katie', comment: 'Una novela realmente interesante. Me encantó la construcción del mundo y el mundo en sí, y algunos de los personajes centrales fueron fascinantes. La trama fue un poco confusa a veces, y encontré algunos aspectos un poco discordantes, pero en general fue una lectura buena e interesante.', rating: 3 },{ reviewer: 'Mallory', comment: 'Preferiría leer un manual del propietario de 800 páginas para un automóvil que no tengo.', rating: 1 },
      ],
    },
    'book8': {
      averageRating: 4.4,
      reviews: [
        { reviewer: 'Leo', comment: 'El primer libro del que tenía tan bajas expectativas y me sorprendió tanto que pasó a ser uno de mis favoritos, dejó tan alto el listón que elevó demasiado las expectativas del segundo y ha pasado lo que me temía...Sólo espero que el tercero recupere la MAGIA del primero', rating: 4 },{ reviewer: 'Sofia', comment: 'Jesucristo. Déjame procesar lo que acabo de leer y regresaré. Calificación real 4.5. Por lo que vale, solo necesito procesar todo porque fue... una experiencia.', rating: 4 },{ reviewer: 'Fabiano', comment: 'Me está costando mucho empezar este libro, en gran parte porque odio a Vin como personaje y no me importa nada Elend, aunque aparentemente esos dos son el foco de atención de esta entrega de la serie.', rating: 2 },
      ],
    },
    'book9': {
      averageRating: 4.5,
      reviews: [
        { reviewer: 'Karla', comment: '4.5 esta segunda vez. me encanta demasiado demasiado demasiado este libro. me hace sentir como en casa. no le doy 5 estrellas porque el principio me aburre un poco, pero aún así lo disfruté infinitamente.', rating: 4 },{ reviewer: 'Cindy', comment: 'Este libro estuvo bien. No lo odié ni lo amé de ninguna manera, aunque hacia el final me di cuenta de lo tibia que me sentía con la historia, ya que preferiría leer cualquier otro libro que tuviera a mano. Aprecio el nivel de novedad en la construcción del mundo durante el tiempo en que se publicó por primera vez.', rating: 3 },{ reviewer: 'Voldemort', comment: 'Esto es una vergüenza para todos los de sangre pura. Mi cabeza lucía bastante elegante en la cabeza de ese extraño profesor... Si tan solo hubiera podido prolongar mi estadía. Harry Potter... Esto aún no ha terminado.', rating: 1 },
      ],
    },
    'book10': {
      averageRating: 4.2,
      reviews: [
        { reviewer: 'Valentina', comment: 'George Orwell nos advirtió que las estadísticas burlarían la humanidad de la clase baja y no lo escuchamos. Nos merecemos nuestro destino, pues, ya este hombre me dejó con el alma más fatalista de lo usual.', rating: 5 },{ reviewer: 'Emily', comment: 'Sé que este es un clásico muy querido y definitivamente disfruté algunas partes... pero algunas veces me aburrí un poco :S', rating: 3 },{ reviewer: 'Joelle', comment: 'Quítenme este libro de encima. ¿Por qué es una lectura obligatoria? Voy a abandonar.', rating: 1 },
      ],
    },
  'book11': {
    averageRating: 4.4,
    reviews: [
      { reviewer: 'Melissa', comment: 'El canto fue definitivamente exagerado para mi gusto, ¡pero Andy Serkis hizo un trabajo maravilloso narrando la historia!', rating: 5 },{ reviewer: 'Ángela', comment: 'Quedé totalmente encantada con la ambientación, los personajes, la trama, la acción y cómo al ser una historia, mundo y trama complejos Tolkien logra dosificar la información y sumergirte de lleno sin ser pesado.', rating: 5 },{ reviewer: 'Tim', comment: 'No entiendo el fenómeno que rodea a esta serie. La encuentro lenta, larga y aburrida. No es para mí.', rating: 1 },
    ],
  },
  'book12': {
    averageRating: 4.0,
    reviews: [
      { reviewer: 'Kewpie', comment: 'Este libro enseñará a los estudiantes de primaria que están empezando a aprender algo nuevo sobre los agujeros negros y a los adultos sobre la mente lúdica y el sentido del humor de Stephen Hawking.', rating: 5 },{ reviewer: 'Diamon', comment: 'Esta es una historia interesante. George debe salvar a alguien que ha caído en un agujero negro. Muestra sus aventuras para salvarlo.', rating: 4 },{ reviewer: 'Aaron', comment: 'La historia no era muy buena. Los recuadros de información que estaban repartidos por todo el libro eran interesantes e informativos y, en general, relacionados con el tema, pero me resultaron un poco distractores. Sin embargo, creo que tuvo éxito porque la información estaba entrelazada con la historia..', rating: 2 },
    ],
  },
  'book13': {
    averageRating: 4.3,
    reviews: [
      { reviewer: 'Leo', comment: 'Me ha sorprendido gratamente esta novela. Tenía mis prejuicios y por eso he tardado en leerla. Me equivoqué. No volveré a juzgar un libro sin haberlo leído antes. Un lector dijo que para poder disfrutarla no hay que leerla como un adulto y es así. Seguiré con la trilogía :)', rating: 5 },{ reviewer: 'Nicola', comment: 'Sigue siendo la cumbre de las novelas distópicas para jóvenes. Me gustan los elementos de acción y suspenso de esta novela, pero me costó conectar con Katniss; parecía muy distante y sin emociones, a pesar de la narración en primera persona.', rating: 3 },{ reviewer: 'London', comment: 'Tuve que resoplarme y jadear para leer este libro. No hay nada admirable en ninguno de los personajes. El personaje principal es una contradicción andante. El libro empieza bastante bien, pero al final es como una Mary Sue.', rating: 1 },
    ],
  },
  'book14': {
    averageRating: 4.0,
    reviews: [
      { reviewer: 'Victoria', comment: 'Muy bueno! Tal vez lo habría hecho más largo con más detalles y eventos dentro del laberinto. Es tan atrapante que se lee rápido y termina resultando corto!', rating: 5 },{ reviewer: 'Monica', comment: 'Un libro con una historia confusa, extraña y un tanto a medias, nos introduce a un mundo sin saber nada al igual que sus personajes, cada paso es un mar de dudas y con mucha acción, entramos a esta gran aventura en la que sobreviven o mueren, leeanlo no se lo pueden perder.', rating: 3 },{ reviewer: 'Katherine', comment: 'Este es uno de los libros peor escritos que he leído. La premisa es intrigante, pero el resultado no vale la pena leer más de 300 páginas de descripciones incompetentes, caracterizaciones débiles y una trama ilógica.', rating: 1 },
    ],
  },
  'book15': {
    averageRating: 4.0,
    reviews: [
      { reviewer: 'María', comment: 'Segunda vez que lo leo y me sigue enamorando. Este libro (o saga, mejor dicho), es genial. Te engancha un montón, y la historia es preciosa. Si no lo habéis leído, no sé a qué esperáis!!!! Jajaja.', rating: 5 },{ reviewer: 'Carlos', comment: 'Es gracioso, porque la primera vez que lo leí le di cinco estrellas y ahora mi opinión ha cambiado bastante. Creo que he aprendido a ser más crítico y objetivo con los libros.', rating: 3 },{ reviewer: 'Aileen', comment: 'Un momento de silencio por el libro que acabo de enterrar en mi jardín.', rating: 1 },
    ],
  },
  'book16': {
    averageRating: 3.8,
    reviews: [
      { reviewer: 'Nikos', comment: 'Me atrevería a decir (aunque quizá de forma arbitraria) que Kant es el Aristóteles de la filosofía occidental moderna. Libro muy exigente, aunque el más accesible para lectores no especializados.', rating: 5 },{ reviewer: 'Cristopher', comment: 'Me gusta Kant, pero la deontología tiene algunos problemas bastante obvios. Eso no quiere decir que no sea un buen libro. Creo que debería ser una lectura obligatoria para los seres humanos en general. El problema es que la ética no es fácil. Me quedo corto. Si la crítica es un trago de café expreso, los prolegómenos son ligeros y dulces.', rating: 3 },{ reviewer: 'Sadako', comment: 'No le di una calificación porque pensé que era una mala lectura. Para mí, Kant es el primer punto de demarcación que puedo reconocer tangiblemente como el inicio de la decadencia de la civilización occidental. Siéntete libre de estar en desacuerdo. Creo firmemente que menos personas deberían leer estas tonterías.', rating: 1 },
    ],
  },
  'book17': {
    averageRating: 4.0,
    reviews: [
      { reviewer: 'Jessica', comment: 'Me encanta esta historia y me encanta cómo este elenco de voces le dio vida. Alan Cumming estuvo extraordinario como el Dr. Seward y quien hizo el papel de Mina tenía una voz encantadora. Pero, por supuesto: Tim Curry. Genial.', rating: 5 },{ reviewer: 'Craz', comment: 'Logré terminarlo :) Es la segunda vez que lo estudio, pero es la primera vez que lo leo con éxito. Esta vez lo disfruté más, principalmente porque leí el último cuarto del libro, que fue lo más disfrutable en mi opinión.', rating: 3 },{ reviewer: 'Stefania', comment: 'La verdad es que no me ha gustado nada :( tenía mucha ilusión por leerlo quitando la primera parte que me encantó el resto se me ha hecho repetitivo y con personajes planos. Quizá lo retome algún día pero de momento me apetece cambiar de lectura.', rating: 1 },
    ],
  },
  'book18': {
    averageRating: 3.5,
    reviews: [
      { reviewer: 'Al', comment: '¡La mejor línea de apertura de la historia! Y bueno, uno siempre puede saltarse algunas de las páginas de ballenas...', rating: 5 },{ reviewer: 'Calista', comment: 'Otra lectura obligatoria en inglés. Entiendo la historia, pero creo que es más una historia para chicos. No es de mi agrado.', rating: 3 },{ reviewer: 'Cassandra', comment: 'Creo que Moby Dick fue mi gran ballena blanca. Literalmente me persiguió durante años y casi podría haberme ahorcado con Ahab al final. El capítulo sobre la cuerda... ¿en serio? ¿En serio?', rating: 1 },
    ],
  },
  'book19': {
    averageRating: 3.9,
    reviews: [
      { reviewer: 'Ángela', comment: 'Al fin leo una de las tres distopías clásicas y me llevo un muy buen sabor de boca, una historia que se lee rápido, engancha desde sus primeras páginas, está llena de acción, y que resalta el enorme valor de los libros, la lectura nos hace libres.', rating: 4 },{ reviewer: 'Mia', comment: 'El mensaje me pareció interesante e importante. Sin embargo, debo admitir que la prosa del autor no me permitió conectar con ningún personaje ni sumergirme totalmente en la historia. Aún así, creo que es un increíble libro que todo lector debería leer, y tal vez más aún, los no lectores.', rating: 3 },{ reviewer: 'Lubitsch', comment: 'Este es uno de los libros más sobrevalorados que he leído. Le daría un pase libre si simplemente estuviera sobrevalorado (un pequeño libro seguro exagerado), pero resulta que también es extremadamente estúpido y problemático.', rating: 1 },
    ],
  },
  'book20': {
    averageRating: 4.1,
    reviews: [
      { reviewer: 'Ángela', comment: 'Una maravilla de libro que va directo a mis mejores lecturas del año. Y es que este libro tiene todo para encantarme, una excelente atmósfera y ambientación, un ritmo trepidante, una prosa hermosa y personajes moralmente grises. El retrato de Dorian Gray es un clásico imperdible que recomiendo a todos.', rating: 5 },{ reviewer: 'Warda', comment: 'El final fue triste, pero necesario. La escritura es impresionante, el mensaje general es atemporal y muy bien estructurado. Los personajes son deplorables, pero complejos. Sin duda, es un final que se quedará conmigo por un tiempo.', rating: 3 },{ reviewer: 'Lucie', comment: 'Estaba segura de que me gustaría este libro, pero me resultó muy aburrido, largo y poco interesante. ¡Los largos pasajes descriptivos fueron mi perdición! Leí un párrafo y de inmediato olvidé de qué se trataba, lo cual fue bastante frustrante. No es para mí.', rating: 1 },
    ],
  },
  'book21': {
    averageRating: 4.1,
    reviews: [
      { reviewer: 'Valentina', comment: 'Una maravilla de libro. La prosa de Márquez es una delicia. Es de esos libros que hay que leer en la vida.', rating: 5 },{ reviewer: 'Jonathan', comment: 'Era demasiado largo y perdí el hilo conductor en las primeras cien páginas, si es que lo había. Sin embargo, el lenguaje era genial y la ciudad era mágica a su manera.', rating: 3 },{ reviewer: 'Aria', comment: 'Basura. El producto es basura y, por lo tanto, ahí es donde he puesto este libro. Historia real.', rating: 1 },
    ],
  },
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
