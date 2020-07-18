import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import Layout from '../components/Layout';
import * as Styled from './styles'

import avatar from '../assets/images/avatar.png';

export default function Home() {
  return (
    <Layout>
        <Styled.Container>
          <Styled.Intro>
            <Styled.IntroFoto>
              <img src={avatar} alt="Minha foto"/>
            </Styled.IntroFoto>
            <Styled.IntroDescription>
              <h1>Olá, bem-vindo ao meu site! </h1>
              <p>Meu nome é Erick Alexandre, tenho 21 anos e sou aficionado por tecnologia desde criança. Estou atualmente estudando o ecossistema React.</p>
            </Styled.IntroDescription>
          </Styled.Intro>
          <Styled.SocialIcons>
            <ul>
              <li>
                <a href="/">
                  <FaGithub size={40} />
                </a>
              </li>

              <li>
                <a href="/">
                  <FaLinkedin size={40} />
                </a>
              </li>

              <li>
                <a href="/">
                  <FaTwitter size={40} />
                </a>
              </li>
            </ul>
          </Styled.SocialIcons>
        </Styled.Container>
    </Layout>
  )
}
