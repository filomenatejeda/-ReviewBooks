import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='bg-yellow-100 p-4 flex justify-center gap-2'>
      <Panel
        title="Panel 1"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      />
      <Panel
        title="Panel 2"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      />
    </div>
  );
}

function Panel({ title, isActive, onShow }) {
  return (
    <div className='bg-blue-100 p-4 text-center flex flex-col w-1/5'>
      <h2>{title}</h2>
      {isActive ? (
        <p>This panel is active.</p>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </div>
  );
}
