import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 960px;
  margin: 100px auto;
  padding-bottom: 100px;
  flex-direction: column;

  @media (max-width: 817px) {
    text-align: center;
    margin: 50px auto;
  }

  h1 {
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 2em;
  }
`;

export const Card = styled.div`
    display: flex;
    color: #000;
    /* margin-bottom: 30px; */
    transition: 0.3s;
    border-radius: 12px;
    height: 100%;
    /* width: 100%; */
    margin: 30px auto;

    @media (max-width: 817px) {
      flex-direction: column;
      align-items: center;

    }

    .gatsby-image-wrapper {
      display: block !important;
    }

    &:hover {
      transform: translateX(10px);
      box-shadow: 5px 5px 2px #E83151;

     
    }
`
export const CardImage = styled.div`
  img {
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 225px;
    border-radius: 12px 0 0 12px;
  }
  
  @media (max-width: 817px) {
    img {
      border-radius: 12px 12px 0 0;
    }
  }

`;
export const CardDescription = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background: #eee;
  border-radius: 0 12px 12px 0;
  padding: 16px;
  height: 225px;

  @media (max-width: 817px) {
    max-width: 400px;
    border-radius: 0 0 12px 12px;
    height: 100%;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    max-width: 550px;
    margin-bottom: 10px;
    opacity: 0.6;
  }

  span {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 6px;
  }

  ul {
    li {
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      
      @media (max-width: 817px) {
        justify-content: center;
      }

      &:last-child {
        margin: 0;
      }

      img {
        width: 22px;
        margin-right: 10px

      }
    }
  }

`;