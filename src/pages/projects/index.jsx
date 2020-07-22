import React from 'react';
// import { useStaticQuery, graphql } from "gatsby";

import Layout from '../../components/Layout';
import * as Styled from './styles';

import reactjs from '../../assets/images/icons/reactjs.svg';
import reactnative from '../../assets/images/icons/reactnative.svg';
import node from '../../assets/images/icons/node.svg';
import bethehero from '../../assets/images/thumb/bethehero-thumb.png';
import ecoleta from '../../assets/images/thumb/ecoleta-thumb.png';
import tupaflix from '../../assets/images/thumb/tupaflix-thumb.png';


function Projects() {
  // const { thumbs } = useStaticQuery(graphql`
  //   {
  //     thumbs: allFile(filter: {absolutePath: {regex: "/thumb/"}}) {
  //       nodes {
  //         id
  //         childImageSharp {
  //           fluid(maxHeight: 225, maxWidth: 400) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout title="Projetos">
      <Styled.Container>
        <h1>Projetos</h1>
          <Styled.Card>
            <Styled.CardImage>
              <img src={tupaflix} alt="TupaFlix Thumb"/>
            </Styled.CardImage>
            <Styled.CardDescription>
              <h3>TupãFlix</h3>
              <p>Aplicação criada durante a NextLevelWeek da Rocketseat. 
                É uma aplicação para conectar ONGs e pessoas que desejam ajudar o próximo.</p>
              <span>Tecnologias:</span>
              <ul>
                <li> <img src={reactjs} alt="ReactJS Icon"/> ReactJS</li>
                <li> <img src={node} alt="Nodejs Icon"/> Nodejs</li>
              </ul>
            </Styled.CardDescription>
        </Styled.Card>

        <Styled.Card>
            <Styled.CardImage>
              <img src={ecoleta} alt="Ecoleta Thumb"/>
            </Styled.CardImage>
            <Styled.CardDescription>
              <h3>Ecoleta - NextLevelWeek 1.0</h3>
              <p>Aplicação criada durante a NextLevelWeek da Rocketseat. 
                É uma aplicação para conectar ONGs e pessoas que desejam ajudar o próximo.</p>
              <span>Tecnologias:</span>
              <ul>
                <li> <img src={reactjs} alt="ReactJS Icon"/> ReactJS</li>
                <li> <img src={reactnative} alt="React Native Icon"/> React Native</li>
                <li> <img src={node} alt="Nodejs Icon"/> Nodejs</li>
              </ul>
            </Styled.CardDescription>
        </Styled.Card>

        <Styled.Card>
            <Styled.CardImage>
              <img src={bethehero} alt="BeTheHero Thumb"/>
            </Styled.CardImage>
            <Styled.CardDescription>
              <h3>Be The Hero - OmniStack 11.0</h3>
              <p>Aplicação criada durante a NextLevelWeek da Rocketseat. 
                É uma aplicação para conectar ONGs e pessoas que desejam ajudar o próximo.</p>
              <span>Tecnologias:</span>
              <ul>
                <li> <img src={reactjs} alt="ReactJS Icon"/> ReactJS</li>
                <li> <img src={reactnative} alt="React Native Icon"/> React Native</li>
                <li> <img src={node} alt="Nodejs Icon"/> Nodejs</li>
              </ul>
            </Styled.CardDescription>
        </Styled.Card>
      </Styled.Container>
    </Layout>
  )
}

export default Projects;