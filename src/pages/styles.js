import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 960px;
  margin: 45px auto;
  flex-direction: column;

`;

export const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`

export const IntroFoto = styled.div`
  img {
    width: 225px;
    margin-right: 40px;
  }
`;

export const IntroDescription = styled.div`
  max-width: 450px;

  p {
    margin-top: 16px;
    font-weight: 500;
    opacity: 0.8;
  }
`;

export const SocialIcons = styled.div`
  position: absolute;
  bottom: 0;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul li {
    padding: 20px 0px;
    margin: 20px;
    transition: transform 0.4s;

    &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    }
  }

  ul > li > a {
    padding: 20px;
  }
  
`;