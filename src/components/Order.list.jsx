export default function List({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <p>Title: {task.title}</p>
          <p>Quantity: {task.quantity}</p>
          <p>Status: {task.status}</p>
        </div>
      ))}
    </div>
  );
}
