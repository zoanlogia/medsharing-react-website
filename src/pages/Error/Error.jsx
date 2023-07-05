import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" h-screen bg-primary">
      
      <div className="flex gap-10 flex-col items-center justify-center h-screen">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-2xl font-bold">
          Désolé, la page demandée n&apos;existe pas
        </h2>
        <p className="text-blue-500 text-2xl font-bold">
          <Link to="/">Retourner à la page d&apos;accueil</Link>
        </p>
      </div>
    </div>
  );
};

export default Error;
