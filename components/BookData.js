// components/BookData.js

const books = [
  {
    id: 'book1',
    title: 'Frankenstein',
    imageUrl: 'https://cdn.prod.website-files.com/6034d7d1f3e0f52c50b2adee/625452f43a8fa502af2b8a14_6034d7d1f3e0f525c6b2b272_frankenstein-mary-shelley-editorial-alma.jpeg',
    date: 'Año: 1823',
    synopsis: 'Una expedición al Polo Norte se cruza, en mitad del mar helado, con un misterioso hombre gigantesco marchando en un trineo a toda velocidad. Horas después, rescatan a otro un hombre a punto de morir. Cuando este se recupera, relata al capitán la historia de cómo ha acabado allí, persiguiendo a aquella criatura monstruosa.',
    review: '', // Campo para la reseña
    author: 'Mary Wollstonecraft Shelley',
    genres: 'Horror, Fiction, Literature, Fantasy', // Géneros separados por comas
  },
  {
    id: 'book2',
    title: 'Odisea',
    imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-UGexzQqUOmC3unQ6vmbehhKCOXe_L8pEK7GnXnchlu5AhsjoGcTpyFnDJQ&usqp=CAE',
    date: 'Año: s. VIII a.C.',
    synopsis: 'Tras una década de guerra, Ulises regresa desde Troya hasta su hogar, Ítaca. La Odisea narra la larga travesía y todas las aventuras vividas por Ulises. Se cruzará con el cíclope Polifemo, con la maga Circe o con la ninfa Calipso. Historias que, casi 3.000 años después, siguen formando parte de nuestra cultura.',
    review: '',
    author: 'Homero',
    genres: 'Fiction, Poetry, Classics, Fantasy', // Géneros separados por comas
  },
  {
    id: 'book3',
    title: 'Asesinato Para Principiantes',
    imageUrl: 'https://images.cdn1.buscalibre.com/fit-in/360x360/b4/64/b464348c99748d2fd1441256b1f13cee.jpg',
    date: 'Año: 2020',
    synopsis: 'Hace cinco años, la estudiante Andie Bell fue asesinada por Sal Singh. La policía sabe que fue él. Sus compañeros también. Todo el mundo lo sabe. Pero Pippa ha crecido en la misma ciudad que ha sido y no lo tiene tan claro... Decidida a desenterrar la verdad, Pippa convierte este asesinato en el tema de su proyecto de final de curso. Poco a poco, empezará a descubrir secretos que alguien se ha empeñado en ocultar. Si el asesino sigue suelto ¿qué será́ capaz de hacer para mantener a Pippa alejada de la verdad?',
    review: '',
    author: 'Holly Jackson',
    genres: 'Mystery, Thriller, Drama, Police, Fiction, Crime' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book4',
    title: 'Cazadores de sombras 1. Ciudad de hueso',
    imageUrl: 'https://images.cdn2.buscalibre.com/fit-in/360x360/3f/85/3f85477f4c95cfe607b3c5b460d9ef36.jpg',
    date: 'Año: 2009',
    synopsis: 'En el Pandemonium, la discoteca de moda de Nueva York, Clary sigue a un atractivo chico de pelo azul hasta que presencia su muerte a manos de tres jóvenes cubiertos de extraños tatuajes. Desde esa noche, su destino se une al de esos tres cazadores de sombras, guerreros dedicados a liberar a la tierra de demonios y, sobre todo, al de Jace, un chico con aspecto de ángel y tendencia a actuar como un idiota...',
    review: '',
    author: 'Cassandra Clare',
    genres: 'Fantasy, Romance, Fiction, Vampires' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book5',
    title: 'Orgullo y Prejuicio',
    imageUrl: 'https://pictures.abebooks.com/isbn/9788490321072-es.jpg',
    date: 'Año: 1813',
    synopsis: 'El matrimonio Bennet tiene cinco hijas casaderas de entre 15 y 23 años. Conseguir colocarlas con un buen casamiento es la única esperanza que puede albelgar la madre, sabedora de que sus hijas perderán su escasa fortuna cuando fallezcan sus padres. La llegada de un joven y rico hacendado, Charles Bingley; revoluciona la pequeña sociedad de pretendientes. Viene acompañado de Fitzwilliam Darcy que se gana pronto fama de distante y antipático. La presencia de los dos jóvenes será el desencadenante de un torrente de pasiones que alcanzará también a Elizabeth Bennet, centro de toda la historia.',
    review: '',
    author: 'Jane Austen',
    genres: 'Fiction, Historical, Literature, Novels, Romance' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book6',
    title: 'Mujercitas',
    imageUrl: 'https://cdn.prod.website-files.com/6034d7d1f3e0f52c50b2adee/63526f5019462827c5993998_9788418933462.jpeg',
    date: 'Año: 1868',
    synopsis: 'Meg, Jo, Beth y Amy son cuatro hermanas adolescentes muy distintas, a las que les une su imaginación y la voluntad de romper con las normas de conducta propias de la época. Acompañadas de su madre, su tía y sus vecinos, las chicas March pronto demuestran que crecer puede ser la mayor de las aventuras.',
    review: '',
    author: 'Louisa May Alcott',
    genres: 'Classics, Romance, Drama, Fiction, Novels' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book7',
    title: 'Dune',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQleKv3AQ0VGLqF8l7Ugg6_IOsaRVDBONClEg&s',
    date: 'Año: 1965',
    synopsis: 'En el desértico planeta Arrakis, el agua es el bien más preciado y llorar a los muertos, el símbolo de máxima prodigalidad. Pero algo hace de Arrakis una pieza estratégica para los intereses del Emperador, las Grandes Casas y la Cofradía, los tres grandes poderes de la galaxia.',
    review: '',
    author: 'Frank Herbert',
    genres: 'Science Fiction, Fiction, Fantasy' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book8',
    title: 'El pozo de la ascensión',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGPgMRmMoGcxGGROoqprsGQcESPYPVxOMXQ&s',
    date: 'Año: 2007',
    synopsis: 'Durante mil años han caído las cenizas y nada florece. Durante mil años los skaa han sido esclavizados y viven sumidos en un miedo inevitable. Durante mil años el Lord Legislador reina con un poder absoluto gracias al terror, a sus poderes y a su inmortalidad. Pero vencer y matar al Lord Legislador fue la parte sencilla. El verdadero desafío será sobrevivir a las consecuencias de su caída. Tomar el poder tal vez resultó fácil, pero ¿qué ocurre después?, ¿cómo se utiliza? En ese mundo de aventura épica, la estrategia política y religiosa debe lidiar con los siempre misteriosos poderes de la alomancia...',
    review: '',
    author: 'Brandon Sanderson',
    genres: 'Epic Fantasy, Fantasy, Fiction, Science Fiction, Adventure ' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book9',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book10',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book11',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book12',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book13',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book14',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book15',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book16',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book17',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book18',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book19',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book20',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book21',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
];

export default books;
