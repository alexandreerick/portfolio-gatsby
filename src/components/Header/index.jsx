import React from 'react';
import { Link } from 'gatsby';

import * as Styled from './styles';

const Header = () => {
  return (
      <Styled.Header>
        <Link to="/">
          <h1>Erick Alexandre</h1>
        </Link>
        <nav>
          <ul>
            <li> <Link to="/about" activeStyle={{ color: "#E83151" }}>Sobre</Link> </li>
            <li> <Link to="/projects" activeStyle={{ color: "#E83151" }}>Projetos</Link> </li>
          </ul>
        </nav>
      </Styled.Header>
  )
}

export default Header;