import {useState} from 'react';
import Form from './components/Form';
import OrderList from './components/Order.list';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    name: 'Jane Doe',
    title: 'Chocolate Cake',
    quantity: 2,
    status: 'Pending'
  },
  { 
    id: 2,
    name: 'John Smith',
    title: 'Vanilla Cupcake',
    quantity: 6,
    status: 'Completed'
  }]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id : Date.now(),
        ...newTask
      }
    ]);
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  return (
      <>
        <div className= "App">
          <h1>Bakery Order Tracker</h1>
          {/* <Form onAddTask={handleAddTask} />
          <OrderList tasks={tasks} onDelete={handleDeleteTask} onToggleStatus={handleToggleStatus} /> */}
        </div>
      </>
  )
}

