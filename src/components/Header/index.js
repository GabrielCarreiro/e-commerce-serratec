import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

//import logoImg from '../../assets/logo.png'; aqui entra a logo.

const Header = () => {

return (
    <Container>
      
      <ul>
        <li>
          <Link to="/funcionario">
            Funcionario
          </Link>
        </li>
        <li>
          <Link to="/produto">
            Produto
          </Link>
        </li>
      </ul>
    </Container>
  );
}

export default Header;