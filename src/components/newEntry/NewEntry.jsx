import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import Context from "../Context";

export default function NewEntry() {
  const navigate = useNavigate();
  const [block, setBlock] = useState(false);
  const [blockButton, setBlockButton] = useState(false);
  const { token, email, setBalance } = useContext(Context);
  const [form, setForm] = useState({
    value: "",
    description: "",
  });

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function entry(event) {
    event.preventDefault();
    if (form.value === "" || form.description === "") {
      alert("Algo estar em branco");
      return;
    } else if (form.value === String) {
      alert("Valor tem que ser um numero");
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          id: email,
        },
      };
      const body = { ...form, id: email, type: "entry" };
      axios
        .post("http://localhost:5000/operation", body, config)
        .then((e) => {
          setBalance(e.data);
          setBlock(true);
          navigate("/home");
          setBlockButton(true);
        })
        .catch((err) => {
          setBlockButton(true);
          setBlock(true);
          console.log(err);
          setBlock(false);
          setBlockButton(false);
        });
    }
  }

  return (
    <Container>
      <div>
        <h2>Nova entrada</h2>
      </div>
      <form>
        <input
          name="value"
          onChange={handleForm}
          value={form.value}
          type="number"
          placeholder="Valor"
          disabled={block}
          required
        />
        <input
          name="description"
          type="text"
          onChange={handleForm}
          value={form.description}
          placeholder="Descrição"
          disabled={block}
          required
        />
        <button disabled={blockButton} onClick={entry}>
          Salvar entrada
        </button>
      </form>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 4rem;

  div {
    width: 32.6rem;
    margin-top: 2.5rem;
  }

  h2 {
    font-weight: 700;
    font-size: 2.6rem;

    color: #ffffff;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;

    input {
      width: 100%;
      height: 66.7rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 3rem;

      width: 32.6rem;
      height: 5.8rem;

      border-radius: 0.5rem;
      border: none;
    }

    input::placeholder {
      font-family: "Raleway";
      font-style: normal;

      font-weight: 400;
      font-size: 2rem;

      color: #000000;
      padding-left: 1.5rem;
    }

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
      border-radius: 0.5rem;
    }
  }
`;
