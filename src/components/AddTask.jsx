import { useState } from "react";
import Input from "../components/Input";

const AddTask = ({ onAddTaskSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col ">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          //verificar se os campos estão preenchidos
          if (!title.trim() || !description.trim()) {
            alert("Por favor, preencha todos os campos");
            return;
          }
          onAddTaskSubmit(title, description); //chamando a função que está no App.jsx e passando os valores dos campos
          setTitle("");
          setDescription(""); //limpando os campos
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddTask;
