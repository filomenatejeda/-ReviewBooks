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
    genres: 'Horror, Ficción, Literatura, Fantasía', // Géneros separados por comas
  },
  {
    id: 'book2',
    title: 'Odisea',
    imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-UGexzQqUOmC3unQ6vmbehhKCOXe_L8pEK7GnXnchlu5AhsjoGcTpyFnDJQ&usqp=CAE',
    date: 'Año: s. VIII a.C.',
    synopsis: 'Tras una década de guerra, Ulises regresa desde Troya hasta su hogar, Ítaca. La Odisea narra la larga travesía y todas las aventuras vividas por Ulises. Se cruzará con el cíclope Polifemo, con la maga Circe o con la ninfa Calipso. Historias que, casi 3.000 años después, siguen formando parte de nuestra cultura.',
    review: '',
    author: 'Homero',
    genres: 'Ficción, Poesía, Clásica, Fantasía', // Géneros separados por comas
  },
  {
    id: 'book3',
    title: 'Asesinato Para Principiantes',
    imageUrl: 'https://images.cdn1.buscalibre.com/fit-in/360x360/b4/64/b464348c99748d2fd1441256b1f13cee.jpg',
    date: 'Año: 2020',
    synopsis: 'Hace cinco años, la estudiante Andie Bell fue asesinada por Sal Singh. La policía sabe que fue él. Sus compañeros también. Todo el mundo lo sabe. Pero Pippa ha crecido en la misma ciudad que ha sido y no lo tiene tan claro... Decidida a desenterrar la verdad, Pippa convierte este asesinato en el tema de su proyecto de final de curso. Poco a poco, empezará a descubrir secretos que alguien se ha empeñado en ocultar. Si el asesino sigue suelto ¿qué será́ capaz de hacer para mantener a Pippa alejada de la verdad?',
    review: '',
    author: 'Holly Jackson',
    genres: 'Misterio, Thriller, Drama, Policia, Ficción, Crimen' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book4',
    title: 'Cazadores de sombras 1. Ciudad de hueso',
    imageUrl: 'https://images.cdn2.buscalibre.com/fit-in/360x360/3f/85/3f85477f4c95cfe607b3c5b460d9ef36.jpg',
    date: 'Año: 2009',
    synopsis: 'En el Pandemonium, la discoteca de moda de Nueva York, Clary sigue a un atractivo chico de pelo azul hasta que presencia su muerte a manos de tres jóvenes cubiertos de extraños tatuajes. Desde esa noche, su destino se une al de esos tres cazadores de sombras, guerreros dedicados a liberar a la tierra de demonios y, sobre todo, al de Jace, un chico con aspecto de ángel y tendencia a actuar como un idiota...',
    review: '',
    author: 'Cassandra Clare',
    genres: 'Fantasía, Romance, Ficción, Vampiros' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book5',
    title: 'Orgullo y Prejuicio',
    imageUrl: 'https://pictures.abebooks.com/isbn/9788490321072-es.jpg',
    date: 'Año: 1813',
    synopsis: 'El matrimonio Bennet tiene cinco hijas casaderas de entre 15 y 23 años. Conseguir colocarlas con un buen casamiento es la única esperanza que puede albelgar la madre, sabedora de que sus hijas perderán su escasa fortuna cuando fallezcan sus padres. La llegada de un joven y rico hacendado, Charles Bingley; revoluciona la pequeña sociedad de pretendientes. Viene acompañado de Fitzwilliam Darcy que se gana pronto fama de distante y antipático. La presencia de los dos jóvenes será el desencadenante de un torrente de pasiones que alcanzará también a Elizabeth Bennet, centro de toda la historia.',
    review: '',
    author: 'Jane Austen',
    genres: 'Ficción, Historica, Literatura, Novela, Romance' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book6',
    title: 'Mujercitas',
    imageUrl: 'https://cdn.prod.website-files.com/6034d7d1f3e0f52c50b2adee/63526f5019462827c5993998_9788418933462.jpeg',
    date: 'Año: 1868',
    synopsis: 'Meg, Jo, Beth y Amy son cuatro hermanas adolescentes muy distintas, a las que les une su imaginación y la voluntad de romper con las normas de conducta propias de la época. Acompañadas de su madre, su tía y sus vecinos, las chicas March pronto demuestran que crecer puede ser la mayor de las aventuras.',
    review: '',
    author: 'Louisa May Alcott',
    genres: 'Clásica, Romance, Drama, Ficción, Novela' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book7',
    title: 'Dune',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQleKv3AQ0VGLqF8l7Ugg6_IOsaRVDBONClEg&s',
    date: 'Año: 1965',
    synopsis: 'En el desértico planeta Arrakis, el agua es el bien más preciado y llorar a los muertos, el símbolo de máxima prodigalidad. Pero algo hace de Arrakis una pieza estratégica para los intereses del Emperador, las Grandes Casas y la Cofradía, los tres grandes poderes de la galaxia.',
    review: '',
    author: 'Frank Herbert',
    genres: 'Ciencia Ficción, Ficción, Fantasía' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book8',
    title: 'El pozo de la ascensión',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGPgMRmMoGcxGGROoqprsGQcESPYPVxOMXQ&s',
    date: 'Año: 2007',
    synopsis: 'Durante mil años han caído las cenizas y nada florece. Durante mil años los skaa han sido esclavizados y viven sumidos en un miedo inevitable. Durante mil años el Lord Legislador reina con un poder absoluto gracias al terror, a sus poderes y a su inmortalidad. Pero vencer y matar al Lord Legislador fue la parte sencilla. El verdadero desafío será sobrevivir a las consecuencias de su caída. Tomar el poder tal vez resultó fácil, pero ¿qué ocurre después?, ¿cómo se utiliza? En ese mundo de aventura épica, la estrategia política y religiosa debe lidiar con los siempre misteriosos poderes de la alomancia...',
    review: '',
    author: 'Brandon Sanderson',
    genres: 'Fantasía Epica, Fantasía, Ficción, Ciencia Ficción, Adventura ' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book9',
    title: 'Harry Potter',
    imageUrl: 'https://images.cdn2.buscalibre.com/fit-in/360x360/e3/bc/e3bcd85377567759874a0664f894a67b.jpg',
    date: '1997',
    synopsis: 'El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla una amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año en Hogwarts, descubre que un malévolo y poderoso mago llamado Voldemort está en busca de una piedra filosofal que alarga la vida de quien la posee..',
    review: '',
    author: 'J.K Rowling',  
    genres: 'Fantasía, Advertura, Acción' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book10',
    title: '1984',
    imageUrl: 'https://cdn.prod.website-files.com/6034d7d1f3e0f52c50b2adee/6254291caac6d1e42e8986df_62023ceb41cd1c2807b2841a_9788418933011.jpeg',
    date: '1949',
    synopsis: '1984 es la antiutopía o distopía más célebre de todas cuantas fueron escritas durante la primera mitad del siglo XX. En ella, Orwell presenta un futuro en el que una dictadura totalitaria interfiere hasta tal punto en la vida privada de los ciudadanos que resulta imposible escapar a su control.',
    review: '', 
    author: 'George Orwell',
    genres: 'Ciencia Ficción, Ficción, Política' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book11',
    title: 'El Señor de los Anillos',
    imageUrl: 'https://images.cdn1.buscalibre.com/fit-in/360x360/35/2e/352e63af40b5cc4eada5cee03da49412.jpg',
    date: '1954',
    synopsis: 'En la Tierra Media, el Señor Oscuro Sauron forjó los Grandes Anillos del Poder y creó uno con el poder de esclavizar a toda la Tierra Media. Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único con la misión de destruirlo. Acompañado de sus amigos, Frodo emprende un viaje hacia Mordor, el único lugar donde el anillo puede ser destruido. Sin embargo, Sauron ordena la persecución del grupo para recuperar el anillo y acabar con la Tierra Media.',
    review: '',
    author: 'J.R.R Tolkien',
    genres: 'Fantasía, Ficción, Adventura' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book12',
    title: 'La clave secreta del Universo',
    imageUrl: 'https://www.penguinlibros.com/cl/1773587/la-clave-secreta-del-universo-la-clave-secreta-del-universo-1.jpg',
    date: 'Año: 2007',
    synopsis: 'A George nada le gusta más en el mundo que mirar las estrellas; también le encantaría tener un ordenador con el que navegar y conocer más sobre el Universo, pero sabe que eso es misión imposible. En casa, sus padres son tan ecologistas que no quieren ni oír hablar del progreso y la ciencia. Pero lo que ellos no saben es que el enemigo está muy cerca: acaba de llegar un nuevo vecino que, ¡horror!, es un eminente científico, y eso, para los padres de George, solo significa una cosa: peligro. Si hubieran imaginado lo que le esperaba a su hijo, nunca le habrían dejado entrar en su casa...',
    review: '',
    author: 'Lucy & Stephen Hawking',
    genres: 'Ciencia, Ciencia Ficción' // Puedes dejarlo vacío o agregar géneros
  },// Puedes dejarlo vacío o agregar géneros
  
  {
    id: 'book13',
    title: 'Los juegos del hambre',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0UxkvgHCllPNg7S8fX4mZJyBQQxmO7KZCg&s',
    date: '2008',
    synopsis: 'Un pasado de guerras ha dejado los 12 distritos que dividen Panem bajo el poder tiránico del Capitolio. Sin libertad y en la pobreza, nadie puede salir de los límites de su distrito. Sólo una chica de 16 años, Katniss Everdeen, osa desafiar las normas para conseguir comida.',
    review: '',
    author: 'Suzanne Collins',
    genres: 'Novela, Ciencia Ficción' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book14',
    title: 'The Maze Runner',
    imageUrl: 'https://images.cdn1.buscalibre.com/fit-in/360x360/99/5f/995f481a1b24655893d3160f05b43903.jpg',
    date: '2009',
    synopsis: 'Thomas es un adolescente cuya memoria fue borrada y que ha sido encerrado junto a otros chicos de su edad en un laberinto plagado de monstruos y misterios. Para sobrevivir, tendrá que adaptarse a las normas y a los demás habitantes del laberinto.',
    review: '',
    author: 'James Dashner',
    genres: 'Acción, Ciencia Ficción, Aventura, Supenso' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book15',
    title: 'La selección',
    imageUrl: 'https://images.cdn3.buscalibre.com/fit-in/360x360/12/9d/129d8a4f502ecd81b1b8a7e67526bdc9.jpg',
    date: '2012',
    synopsis: 'Para treinta y cinco chicas, La Selección es una oportunidad que sólo se presenta una vez en la vida. La oportunidad de escapar de la vida que les ha tocado por nacer en una determinada familia. La oportunidad de que las trasladen a un mundo de trajes preciosos y joyas que no tienen precio. La oportunidad de vivir en un palacio y de competir por el corazón del guapísimo príncipe Maxon. Sin embargo, para America Singer, ser seleccionada es una pesadilla porque significa alejarse de su amor secreto, Aspen, quien pertenece a una casta inferior a la de ella; y también abandonar su hogar para pelear por una corona que no desea y vivir en un palacio que está bajo la constante amenaza de ataques violentos por parte de los rebeldes.',
    review: '',
    author: 'Kiera Cass',
    genres: 'Novela, Ficción, Romance, Realeza' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book16',
    title: 'La Fundamentacion de la metafisica de las costumbres',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Fundamentación_de_la_metafísica_de_las_costumbres_%281921%29.pdf/page1-443px-Fundamentación_de_la_metafísica_de_las_costumbres_%281921%29.pdf.jpg',
    date: '1785',
    synopsis: 'La Fundamentación de la metafísica de las costumbres es una de las obras más importantes de la historia de la ética y ejemplo paradigmático del pensamiento ilustrado. En estas páginas Kant lleva a cabo el aislamiento crítico, la elucidación y la justificación del principio supremo de la moralidad.',
    review: '',
    author: 'Immanuel Kant',
    genres: 'Ética' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book17',
    title: 'Drácula',
    imageUrl: 'https://cdn.prod.website-files.com/6034d7d1f3e0f52c50b2adee/62545414f3a6fb9f5d120730_6034d7d1f3e0f55ec6b2b1da_Dracula-bram-stocker-editorial-alma.jpeg',
    date: 'Año: 1897',
    synopsis: 'El joven abogado Jonathan Harker viaja a Transilvania para encontrarse con un cliente, el conde Drácula, quien pronto revela ser un vampiro. A medida que Drácula se traslada a Inglaterra, un grupo de personas liderado por el Dr. Van Helsing se une para detener al monstruo.',
    review: '', // Campo para la reseña
    author: 'Bram Stoker',
    genres: 'Horror, Ficción, Literatura, Gótico', // Géneros separados por comas
  },
  {
    id: 'book18',
    title: 'Moby Dick',
    imageUrl: 'https://images.cdn1.buscalibre.com/fit-in/360x360/b5/89/b589be02f650868192cc4bc0c876ea31.jpg',
    date: 'Año: 1851',
    synopsis: 'La narración sigue al marinero Ishmael mientras se embarca en el Pequod, un barco ballenero capitaneado por el obsesivo Ahab. Ahab está decidido a vengarse de Moby Dick, una enorme ballena blanca que le ha mutilado en el pasado.',
    review: '', // Campo para la reseña
    author: 'Herman Melville',
    genres: 'Aventura, Ficción, Literatura', // Géneros separados por comas
  },  
  {
    id: 'book19',
    title: 'Fahrenheit 451',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthXfKlymuR3xTtIU5KpoFCLCkr8vOnKHXig&s',
    date: 'Año: 1953',
    synopsis: 'En un futuro distópico donde los libros están prohibidos y los bomberos queman cualquier libro que encuentren, el protagonista Guy Montag, un bombero, comienza a cuestionar el sistema en el que vive y decide rebelarse contra la censura.',
    review: '', // Campo para la reseña
    author: 'Ray Bradbury',
    genres: 'Distopía, Ciencia ficción, Ficción, Literatura', // Géneros separados por comas
  },  
  {
    id: 'book20',
    title: 'El retrato de Dorian Gray',
    imageUrl: 'https://images.cdn2.buscalibre.com/fit-in/360x360/91/18/9118645bef1e527a3e1f14e7187ac89e.jpg',
    date: 'Año: 1890',
    synopsis: 'Dorian Gray es un joven cuya belleza se captura en un retrato. A medida que pasa el tiempo, Dorian no envejece, pero su retrato empieza a mostrar signos de decadencia física y moral, revelando el costo de sus pecados.',
    review: '', // Campo para la reseña
    author: 'Oscar Wilde',
    genres: 'Ficción, Literatura, Fantasía, Gótico', // Géneros separados por comas
  },
  {
    id: 'book21',
    title: 'Cien años de soledad',
    imageUrl: 'https://images.cdn2.buscalibre.com/fit-in/360x360/38/12/3812f54c9c10992f538ead2c95d775ed.jpg',
    date: 'Año: 1967',
    synopsis: 'La historia sigue a la familia Buendía a lo largo de siete generaciones en el mítico pueblo de Macondo, mientras explora temas como la soledad, el tiempo, el destino y la repetición cíclica de la historia.',
    review: '', // Campo para la reseña
    author: 'Gabriel García Márquez',
    genres: 'Realismo mágico, Ficción, Literatura', // Géneros separados por comas
  }
];

export default books;
