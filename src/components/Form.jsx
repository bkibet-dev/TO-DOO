<<<<<<< HEAD
import { useState } from 'react';

export default function Form({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Mixing');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({
      title,
      description,
      dueDate,
      status,
      name,
    });

    setTitle('');
    setDueDate('');
    setStatus('Pending');
    setDescription('');
    setName('');
    setOwner('');
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Order Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Croissant Batch #2"
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe notes or special instructions..."
        />
      </div>

      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Workflow Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="In Oven">In Progress</option>
          <option value="Ready">Completed</option>
        </select>
      </div>

      <div className="form-group">
        <label>Assigned Baker</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Chef Marie"
          required
        />
      </div>

      <button type="submit" className="submit-btn">Add Order</button>
    </form>
  );
}
=======
import { useState } from "react";

function OrderForm({ onAddOrder }) {

  const [customerName, setCustomerName] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [urgency, setUrgency] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customerName || !item || !quantity || !category || !urgency) {
      alert("Please complete all fields");
      return;
    }

    const order = {
      id: Date.now(),
      customerName: customerName,
      item: item,
      quantity: Number(quantity),
      category: category,
      urgency: urgency,
      status: "Mixing"
    };


    // Send order to App.jsx
    onAddOrder(order);


    // Reset form
    setCustomerName("");
    setItem("");
    setQuantity("");
    setCategory("");
    setUrgency("");
  };


  return (
    <div className="order-form">

      <h2> New Bakery Order</h2>

      <form onSubmit={handleSubmit}>

        <label>
          Customer Name
        </label>

        <input
          type="text"
          placeholder="Enter customer name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />


        <label>
          Item / Pastry
        </label>

        <input
          type="text"
          placeholder="Chocolate Cake"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />


        <label>
          Quantity
        </label>

        <input
          type="number"
          min="1"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />


        <label>
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">
            Select Category
          </option>

          <option value="Bread">
             Bread
          </option>

          <option value="Pastries">
             Pastries
          </option>

          <option value="Custom Cake">
             Custom Cake
          </option>

          <option value="Cookies">
             Cookies
          </option>

        </select>


        <label>
          Urgency
        </label>

        <select
          value={urgency}
          onChange={(e) => setUrgency(e.target.value)}
        >

          <option value="">
            Select Urgency
          </option>

          <option value="Normal">
            Normal
          </option>

          <option value="Important">
            Important
          </option>

          <option value="Urgent">
             Urgent
          </option>

        </select>


        <button type="submit">
          Add Order
        </button>

      </form>

    </div>
  );
}

export default OrderForm;
>>>>>>> be81ae0 (Add Form.jsx functionality)
