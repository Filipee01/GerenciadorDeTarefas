import { ChevronRight, Trash2 } from "lucide-react"; //importando o ícone
import { useNavigate } from "react-router-dom"; //importando o hook useNavigate para navegar entre as páginas da aplicação

const Tasks = ({ tasks, onTaskClick, onDeleteTaskClick }) => {
  const navigate = useNavigate(); //usando o hook useNavigate para navegar entre as páginas da aplicação

  //função para ver detalhes da tarefa
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams(); //criando um novo objeto URLSearchParams
    query.set("title", task.title); //setando o valor do parâmetro title
    query.set("description", task.description); //setando o valor do parâmetro description
    navigate(`/task?${query.toString()}`); //navegando para a página de detalhes da tarefa
  }

  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => {
          return (
            <li key={task.id} className="flex gap-2">
              <button
                onClick={() => {
                  onTaskClick(task.id);
                }}
                className={`bg-slate-400 w-full text-left text-white p-2 rounded-md ${
                  task.isCompleted && "line-through"
                }`} // se tiver concluido, adicionar linha no texto
              >
                {task.title}
              </button>
              <button
                onClick={() => {
                  onSeeDetailsClick(task);
                }}
                className="bg-slate-400 p-2 rounded-md text-white"
              >
                <ChevronRight />
              </button>
              <button
                onClick={() => {
                  onDeleteTaskClick(task.id); //deletando a tarefa
                }}
                className="bg-slate-400 p-2 rounded-md text-white"
              >
                <Trash2 />
              </button>
            </li> //redenrizando as tarefas
          );
        })}
      </ul>
    </div>
  );
};

export default Tasks;
