import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import Layout from '../components/Layout';
import * as Styled from './styles';

// import avatar from '../assets/images/avatar.png';

export default function Home() {
  const {
    site: {
      siteMetadata: {
        social: {
          github,
          linkedin,
          twitter,
          gmail
        }
      }
    },
    avatar
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          social {
            github
            linkedin
            twitter
            gmail
          }
        }
      },
      avatar: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(width: 225) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
        <Styled.Container>
          <Styled.Intro>
            <Styled.IntroFoto>
              <Img fixed={avatar.childImageSharp.fixed} alt="avatar"/>
            </Styled.IntroFoto>
            <Styled.IntroDescription>
              <h1>Olá, bem-vindo ao meu site! </h1>
              <p>Meu nome é Erick Alexandre, tenho 21 anos e sou aficionado por tecnologia desde criança. Estou atualmente envolvido com o ecossistema React.</p>
            </Styled.IntroDescription>
          </Styled.Intro>
          <Styled.SocialIcons>
            <ul>
              <li>
                <a href={github} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              </li>

              <li>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              </li>

              <li>
                <a href={twitter} target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
              </li>

              <li>
                <a href={gmail} target="_blank" rel="noreferrer">
                  <FiMail />
                </a>
              </li>
            </ul>
          </Styled.SocialIcons>
        </Styled.Container>
    </Layout>
  )
}
