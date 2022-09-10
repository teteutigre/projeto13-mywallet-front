import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import Context from "../Context";
import porta from "../../imgs/porta.svg";
import saida from "../../imgs/saida.svg";
import entrada from "../../imgs/Entrada.svg";

export default function Home() {
  const navigate = useNavigate();
  const { name } = useContext(Context);
  const promise = axios.get("http://localhost:5000/home");

  return (
    <Container>
      <div>
        <h2>Olá, {name}</h2>
        <img onClick={() => navigate("/sign-in")} src={porta} />
      </div>
      <div className="registry">
        {promise.then((res) => {
          res.data.Entry.map((e) => {});
          console.log(res.data.Exit);
        })}
      </div>
      <Footer>
        <div>
          <img onClick={() => navigate("/newEntry")} src={entrada} />
          <p>
            Nova <br /> entrada
          </p>
        </div>

        <div>
          <img onClick={() => navigate("/newExit")} src={saida} />
          <p>
            Nova <br /> saída
          </p>
        </div>
      </Footer>
    </Container>
  );
}

const Container = styled.main`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 90%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5rem;
  }

  h2 {
    font-weight: 700;
    font-size: 2.6rem;

    color: #ffffff;
  }

  .registry {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;
    min-height: 70vh;

    background-color: #ffffff;
    border-radius: 5px;

    p {
      font-weight: 400;
      font-size: 2rem;
      text-align: center;

      padding: 0px 20%;

      color: #868686;
    }
  }
`;

const Footer = styled.footer`
  height: 90%;
  width: 98%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: -1.5rem;
  margin-bottom: 1rem;

  div {
    width: 15.5rem;
    height: 11.4rem;

    background: #a328d6;
    border-radius: 5px;

    display: flex;
    align-items: flex-start;
    justify-content: space-around;

    flex-direction: column;
  }

  img {
    margin-left: 1rem;
  }

  p {
    margin-left: 1rem;
    font-weight: 700;
    font-size: 1.7rem;

    color: #ffffff;
  }
`;
