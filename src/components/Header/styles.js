import styled from 'styled-components';
import { darken } from 'polished';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 10px 0;

  & > a {
    font-size: 1.3em;
    color: #eee;

  }

  nav {
    width: 200px;
  }

  nav > ul{
    display: flex;
    font-size: 1.4em;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;

    
  }

  nav > ul a {
    padding: 10px;
    color: #eee;

    &:hover {
      color: ${darken(0.2, "#E83151")};
      transition: 0.2s;
    }
  }

`;