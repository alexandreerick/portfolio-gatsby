import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 960px;
  margin: 45px auto;
`;

export const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;

  @media (max-width: 817px) {
    flex-direction: column;
  }

`

export const IntroFoto = styled.div`
  filter: drop-shadow(0 0 0.45rem crimson);
`;

export const IntroDescription = styled.div`
  max-width: 450px;
  margin-left: 40px;

  @media (max-width: 817px) {
    margin-top: 12px;
    text-align: center;
    margin-left: 0;


    h1 {
      font-size: 1.5em;
    }
  }

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
    font-size: 40px;

    @media (max-width: 480px) {
      font-size: 25px;
      padding: 10px;

    }
  }
  
`;