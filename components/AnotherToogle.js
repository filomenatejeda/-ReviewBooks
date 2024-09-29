import { useState } from 'react';

export default function ToggleButton() {
  const [isToggled, setToggled] = useState(false);  

  function handleToggle {
    setIsToggled(!isToggled);  
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isToggled ? 'Hide' : 'Show'} Details
      </button>
      {isToggled && <p>Details are shown!</p>}
    </div>
  )
}  

