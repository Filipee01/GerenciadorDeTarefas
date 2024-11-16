import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid"; //importando a função uuidv4 para gerar um id único
import Title from "./components/Title";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || [])
  ); // criando State para armazenar as tarefas

  //função para marcar a tarefa como concluída
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //preciso atualizar essa tarefa
      if (task.id == taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      //não preciso atualizar essa tarefa
      return task;
    });
    setTasks(newTasks); //atualizando o State para renderizar as tarefas
  }

  //função para deletar uma tarefa
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId); //vai ter todas as tarefas menos a que foi clicada
    setTasks(newTasks); //atualizando o State para renderizar as tarefas
  }

  //função para adicionar uma nova tarefa
  function onAddTaskSubmit(title, description) {
    const newTaks = {
      id: uuidv4(), //gerando um id único
      title: title,
      description: description,
      isCompleted: false,
    }; //criando a nova tarefa
    setTasks([...tasks, newTaks]); //atualizando o State para renderizar as tarefas
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="w-screen h-screen bg-slate-950 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />{" "}
        {/* Adicionando a função ao componente AddTask */}
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
};

export default App;
