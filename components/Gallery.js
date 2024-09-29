import { useState } from 'react';

const images = [
  { url: 'https://i.imgur.com/Mx7dA2Y.jpg', alt: 'Neurocirugía' },
  { url: 'https://i.imgur.com/ZF6s192m.jpg', alt: 'Floralis Genérica' },
  { url: 'https://i.imgur.com/aTtVpES.jpg', alt: 'Eternal Presence' }
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex((index + 1) % images.length);
  }

  return (
    <div className='p-4 bg-red-100 flex flex-col justify-center'>
      <img className='mx-auto mb-2 w-80 h-80' src={images[index].url} alt={images[index].alt} />
      <br />
      <button onClick={handleNext} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/4 mx-auto'>Siguiente</button>
    </div>
  );
}
