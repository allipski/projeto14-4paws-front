import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header({ getProducts }) {
  
  return (
    <Wrapper>
      <div>
        <img onClick={() => getProducts()} src="https://i.ibb.co/SDSfsSq/logo.png" />
        <Menu>
          <span
            onClick={() => getProducts("cat")}
          >
            Gatos
          </span>
          <span
            onClick={() => getProducts("dog")}
          >
            Cães
          </span>
          <span
            onClick={() => getProducts("bird")}
          >
            Pássaros
          </span>
          <span
            onClick={() => getProducts("reptile")}
          >
            Répteis
          </span>
          <span onClick={() => getProducts("other")}
          >Outros pets</span>
        </Menu>
        <Buttons>
          <span>
            <Link to={"/cart"}>
              <ion-icon name="bag-handle-outline"></ion-icon>
            </Link>
          </span>
          <div>
            <Link to={"/sign-in"}>Login</Link>
            <span>|</span>
            <Link to={"/sign-up"}>Cadastro</Link>
          </div>
        </Buttons>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 78px;
  background-color: #83c5be;
  position: fixed;
  top: 0;
  z-index: 99;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    gap: 60px;
    object-fit: contain;
  }

  img {
    height: 50px;
    width: auto;
  }

  a {
    text-decoration: none;
    color: #000000;
  }
  
  a:visited {
    color: #000000;
    text-decoration: none;
  }

  @media (max-width: 930px) {
    overflow-x: scroll;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  gap: 10px;
  cursor: pointer;

  span {
    white-space: nowrap;
    text-align: center;
    font-weight: 550;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  padding-right: 10px;
  font-weight: 550;

  ion-icon {
    font-size: 30px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }
`;
