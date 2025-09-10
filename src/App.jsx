import { useState } from "react"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: 'Estudar React',
    description: 'Estudar os conceitos básicos de React',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Estudar Node',
    description: 'Estudar os conceitos básicos de Node',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Estudar JavaScript',
    description: 'Estudar os conceitos básicos de JavaScript',
    isCompleted: false,
  }
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Preciso atualizar a task que foi clicada
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      // Nao preciso atualizar a task que nao foi clicada
      return task;
    });
    
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  )
}

export default App