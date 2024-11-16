import { useNavigate, useSearchParams } from "react-router-dom"; // usar o hook useSearchParams para pegar os parâmetros da URL
import { ChevronLeftIcon } from "lucide-react"; // importando o ícone
//query params
import Title from "../components/Title"; // importar o componente Title

const Taskpage = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title"); // pegar o valor do parâmetro title
  const description = searchParams.get("description"); // pegar o valor do parâmetro description
  const navigate = useNavigate(); // usar o hook useNavigate para navegar entre as páginas da aplicação

  return (
    <div className="h-screen w-screen bg-slate-950  p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Datalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Taskpage;
