import React from 'react';
import { createRoot } from 'react-dom/client';

let states = [];
let stateIndex = -1;

function useState(defaultValue) {
  const index = ++stateIndex;

  if(states[index]) return states[index];

  // If this index doesn't have data yet, initialize it
  const setValue = (newValue) => {
    states[index][0] = newValue;
    render();
  }

  const returnArray = [defaultValue, setValue];
  states[index] = returnArray;
  return returnArray;
}

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  const [todo, setTodo] = useState('');
  const [warning, setWarning] = useState(null);

  console.log("App Rendered! Current todo:", todo);

  const handleInput = (e) => {
    const val = e.target.value;
    setTodo(val);
    setWarning(val.includes('.js') ? 'Need JS skills!' : null);
  };

  return (
    <div>
      <textarea value={todo} onChange={handleInput} />
      <h2>{warning || 'Status: OK'}</h2>
    </div>
  );
}

function render() {
  // IMPORTANT: Reset the pointer so App starts at index 0 again
  stateIndex = -1; 

  createRoot(document.getElementById('root')).render(
    <App />
  )
}

render(); // Initial call