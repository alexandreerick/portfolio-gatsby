import React from 'react';
import { Link } from 'gatsby'

import Layout from '../../components/Layout';
import { Container } from './styles'

function About() {
  return (
    <Layout>
      <Container>
        <h1>Sobre</h1>
        <Link to="/">Home</Link>
      </Container>
    </Layout>
  );
}

export default About;