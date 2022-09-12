import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Context from "../Context";
import porta from "../../imgs/porta.svg";
import saida from "../../imgs/saida.svg";
import entrada from "../../imgs/Entrada.svg";
import Extract from "./Extract.jsx";
import NoExtract from "./NoExtract";

export default function Home() {
  const navigate = useNavigate();
  const { name, token, email, setName, setToken, setEmail } =
    useContext(Context);
  const [extract, setExtract] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      id: email,
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/home", config)
      .then((res) => {
        setExtract(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header>
        <h2>Olá, {name}</h2>
        <img
          onClick={() => {
            setToken("");
            setName("");
            setEmail("");
            navigate("/");
          }}
          src={porta}
        />
      </Header>

      {extract.length > 0 ? (
        <Extract extract={extract} />
      ) : (
        <NoExtract></NoExtract>
      )}

      <Footer>
        <button>
          <img onClick={() => navigate("/newEntry")} src={entrada} />
          <h2>
            Nova <br /> entrada
          </h2>
        </button>

        <button>
          <img onClick={() => navigate("/newExit")} src={saida} />
          <h2>
            Nova <br /> saída
          </h2>
        </button>
      </Footer>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 32.6rem;
  margin: 2.5rem auto 0 auto;
  h2 {
    color: white;
    font-size: 2.6rem;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
  }
  img {
    cursor: pointer;
  }
`;

const Footer = styled.main`
  width: 32.6rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  button {
    width: 15.5rem;
    height: 11.4rem;
    background-color: #a328d6;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.7rem;
    font-weight: bold;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: left;
    cursor: pointer;
  }
`;
