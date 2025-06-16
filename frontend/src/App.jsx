import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/todos/tasks/')
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const handleAdd = () => {
    fetch('http://127.0.0.1:8000/todos/tasks/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTask }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks((prev) => [...prev, data]);
        setNewTask('');
      });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
