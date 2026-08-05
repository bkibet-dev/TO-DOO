import { useState } from 'react';

export default function Form({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Mixing');
  const [owner, setOwner] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({
      title,
      description,
      dueDate,
      status,
      owner,
    });

    setTitle('');
    setDescription('');
    setDueDate('');
    setStatus('Mixing');
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
          <option value="Mixing">Mixing</option>
          <option value="In Oven">In Oven</option>
          <option value="Ready">Ready</option>
        </select>
      </div>

      <div className="form-group">
        <label>Assigned Baker</label>
        <input
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          placeholder="e.g., Chef Marie"
          required
        />
      </div>

      <button type="submit" className="submit-btn">Add Order</button>
    </form>
  );
}