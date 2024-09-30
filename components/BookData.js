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
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book4',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book5',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book6',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book7',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
  },
  {
    id: 'book8',
    title: 'Título del Libro 3',
    imageUrl: 'URL_DE_LA_IMAGEN_DEL_LIBRO_3',
    date: 'fecha',
    synopsis: 'Esta es la sinopsis del Libro 3.',
    review: '',
    author: 'Autor del Libro 3',
    genres: '' // Puedes dejarlo vacío o agregar géneros
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
