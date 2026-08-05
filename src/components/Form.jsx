import { useState } from 'react';

export default function Form({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
<<<<<<< HEAD
  const [status, setStatus] = useState('Mixing');
=======
  const [status, setStatus] = useState('Pending');
>>>>>>> 5acdca2 (Add & Delete)
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
<<<<<<< HEAD
    setDueDate('');
    setStatus('Pending');
    setDescription('');
    setName('');
    setOwner('');
=======
    setDescription('');
    setDueDate('');
    setStatus('Pending');
    setName('');
>>>>>>> 5acdca2 (Add & Delete)
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
          onClick={(e) => {
            if (typeof e.target.showPicker === 'function') {
              e.target.showPicker();
            }
          }}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Workflow Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
<<<<<<< HEAD
          <option value="In Oven">In Progress</option>
          <option value="Ready">Completed</option>
=======
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
>>>>>>> 5acdca2 (Add & Delete)
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