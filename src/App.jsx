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

  // const [search, setSearch] = useState("");
  // const [filter, setFilter] = useState("All");

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

  // const handleToggleStatus = (id) => {
  //   setTasks((prevTasks) =>
  //     prevTasks.map((task) =>
  //       task.id === id ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task
  //     )
  //   );
  // };

  // const filteredTasks = tasks.filter((task) => {
  //   const matchesSearch =
  //     task.name.toLowerCase().includes(search.toLowerCase()) ||
  //     task.title.toLowerCase().includes(search.toLowerCase());
  //   const matchesFilter = filter === 'All' || task.status === filter;
  //   return matchesSearch && matchesFilter;
  // });

  // const totalOrders = tasks.length;
  // const pendingOrders = tasks.filter(
  //   (task) => task.status === 'Pending'
  // ).length;
  // const completedOrders = tasks.filter(
  //   (task) => task.status === 'Completed'
  // ).length;

  return (
      <>
        <div className= "App">
          <h1>Bakery Order Tracker</h1>
          <Form onAddTask={handleAddTask} />
          <OrderList tasks={tasks} onDelete={handleDeleteTask} onToggleStatus={handleToggleStatus} />
        </div>
      </>
  )
}

