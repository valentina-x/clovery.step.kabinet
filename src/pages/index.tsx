import React from 'react';
import Head from 'next/head';
import Layout from './layout';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Главная страница</title>
      </Head>
      <>
        <h1>Главная страница</h1>
      </>
    </Layout>
  );
};

export default IndexPage;
