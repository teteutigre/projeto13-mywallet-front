import { useContext } from "react";
import styled from "styled-components";
import Context from "../Context";

export default function Extract(props) {
  const { balance } = useContext(Context);

  return (
    <Container>
      <ul>
        {props.extract.map((element, indice) => {
          return (
            <li key={indice}>
              <div>
                <p>{element.date}</p>
                <h2>{element.description}</h2>
              </div>
              <p className={element.type}>{element.value}</p>
            </li>
          );
        })}
      </ul>
      <Footer>
        <h2>SALDO</h2>
        <h3>{Number(balance).toFixed(2)}</h3>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  width: 32.6rem;
  height: 44.6rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  margin: 2.2rem auto;
  position: relative;
  ul {
    display: flex;
    height: 95%;
    flex-direction: column;
    margin-bottom: 5rem;
    overflow-y: scroll;
    width: 95%;
    margin: 0 auto;
    padding-top: 2.3rem;
    font-size: 1.6rem;
    div {
      display: flex;
      gap: 0.5rem;
    }
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2.3rem;
      p {
        color: #c6c6c6;
      }
      .entry {
        color: #03ac00;
      }
      .exit {
        color: #c70000;
      }
    }
  }
`;

const Footer = styled.footer`
  bottom: 0;
  left: 1rem;
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.7rem;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
  }

  h3 {
    font-size: 1.7rem;
    color: #03ac00;
  }
`;
