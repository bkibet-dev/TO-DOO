export default function List({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <p>Title: {task.title}</p>
          <p>Description: {task.description}</p>
          <p>Quantity: {task.quantity}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          <p>Assigned Baker: {task.name}</p>
        </div>
      ))}
    </div>
  );
}
