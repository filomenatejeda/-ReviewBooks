import { useState } from 'react';

export default function ToDoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    setTasks([...tasks, task]);
    setTask('');
  }

  return (
    <div className='bg-orange-100 p-4 flex flex-col items-center gap-2'>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
        className='p-2 border border-gray-400 rounded'
      />
      <button onClick={handleAddTask} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Task</button>

      <ul className='bg-amber-100 p-4'>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
