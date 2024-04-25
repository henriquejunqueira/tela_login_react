import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

const Login = () => {
  // ! Armazenam as entradas do usuário no formulário
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ! Função que é chamada quando o formulário é enviado
  const handleSubmit = (event) => {
    event.preventDefault(); // ! Impede que a página seja recarregada
    // alert("Dados enviados: " + username + " - " + password);
    console.log("Dados de Login: ", { username, password }); // ! Faz o console log das credenciais do usuário
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o Sistema</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="Digite seu email..."
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Digite sua senha..."
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registrar</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
