import { useContext } from "react";
import styled from "styled-components";
import Context from "../Context";

export default function Extract(props) {
  const { balance } = useContext(Context);

  return (
    <Main>
      <ul>
        {props.extract.map((element, indice) => {
          return (
            <li key={indice}>
              <div>
                <p>{element.date}</p>
              </div>
              <h2>{element.description}</h2>
              <p className={element.type}>{element.value}</p>
            </li>
          );
        })}
      </ul>
      <Footer>
        <h3>SALDO</h3>
        <h4>{Number(balance).toFixed(2)}</h4>
      </Footer>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    margin: 0 auto;
    width: 90%;

    color: black;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  p {
    font-weight: 400;
    font-size: 1.6rem;

    color: black;
  }

  .exit {
    color: red;
  }
  .entry {
    color: green;
  }

  h2 {
    font-weight: 400;
    font-size: 1.6rem !important;
    line-height: 1.9rem;

    color: #000000 !important;
  }
`;

const Footer = styled.footer``;
