import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import Context from "../Context";

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState("Cadastrar");
  const [block, setBlock] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function login(event) {
    event.preventDefault();
    setLoading(<ThreeDots color="white" />);

    if (
      form.email === "" ||
      form.password === "" ||
      form.name === "" ||
      form.passwordConfirm === ""
    ) {
      alert("E-mail ou senha esta em branco");
      setLoading("Cadastrar");
      return;
    } else if (form.passwordConfirm !== form.password) {
      alert("As senhas não são iguais ");
      setLoading("Cadastrar");
      return;
    } else if (form.password.length < 6 || form.passwordConfirm.length < 6) {
      alert("As senhas tem que possuir no minimo 6 caracteres");
      setLoading("Cadastrar");
      return;
    } else {
      const body = { ...form };
      axios
        .post("http://localhost:5000/sign-up", body)
        .then(() => {
          setBlock(true);
          navigate("/sign-in");
        })
        .catch((err) => {
          setBlock(true);
          alert("Login ou senha inválidos");
          setLoading("Cadastrar");
          setBlock(false);
          console.log(err);
        });
    }
  }

  return (
    <Container>
      <h1>MyWallet</h1>
      <form>
        <input
          name="name"
          type="text"
          onChange={handleForm}
          value={form.name}
          placeholder="Nome"
          disabled={block}
          required
        />
        <input
          name="email"
          type="email"
          onChange={handleForm}
          value={form.email}
          placeholder="E-mail"
          disabled={block}
          required
        />
        <input
          name="password"
          type="password"
          onChange={handleForm}
          value={form.password}
          placeholder="Senha"
          disabled={block}
          required
        />
        <input
          name="passwordConfirm"
          type="password"
          onChange={handleForm}
          value={form.passwordConfirm}
          placeholder="Confirme a senha"
          disabled={block}
          required
        />
        <button onClick={login}>{loading}</button>
      </form>
      <p onClick={() => navigate("/sign-in")}>Já tem uma conta? Entre agora!</p>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  height: 66.7rem;
  background-color: #8c11be;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 3rem;

  h1 {
    font-weight: 400;
    font-size: 3.2rem;

    color: #ffffff;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;

    button {
      width: 32.6rem;
      height: 4.6rem;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      border: none;

      font-weight: 700;
      font-size: 2rem;
      color: #ffffff;

      background-color: #a328d6;
    }
  }

  input {
    width: 32.6rem;
    height: 5.8rem;
  }

  input::placeholder {
    font-family: "Raleway";
    font-style: normal;

    font-weight: 400;
    font-size: 2rem;
    color: #000000;
    padding-left: 1.5rem;
  }

  p {
    font-weight: 700;
    font-size: 1.5rem;

    color: #ffffff;
  }
`;
