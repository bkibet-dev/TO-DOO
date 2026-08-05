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

  return (
    <>
    
    </>
  )
}

