import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import "./Login.css";
const Login = () => {
  const [userName, setUsername] = useState("");
  const [senha, setSenha] = useState("");

  const submitEnvio = (e) => {
    e.preventDefault();
    console.log(userName, senha);
  };
  return (
    <div className="container">
      <form onSubmit={submitEnvio}>
        <h1>Acesse o sistema</h1>
        <div className="inputs">
          <input
            type="text"
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="inputs">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="lembrarSenha">
          <label>
            <input type="checkbox" />
            Lembrar Senha
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>

        <div className="criarConta">
          <p>
            Não tem uma conta ? <a href="#">Criar conta</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
