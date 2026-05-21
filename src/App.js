import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]); // To store the list of tasks
  const [loading, setLoading] = useState(true);

  // 1. The "Effect" Hook: This runs as soon as the page loads
  useEffect(() => {
    // fetch('http://localhost:8080/api/tasks') // Calling your Spring Boot API
    fetch('http://192.168.49.2:30080/api/tasks') // Calling your Spring Boot API
      .then(response => response.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  if (loading) return <div>Connecting to Backend...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Task Manager</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;