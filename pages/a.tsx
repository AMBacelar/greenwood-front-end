import React from 'react';
import {Layout} from '../components/layout/Layout';
import { NextPage, GetServerSideProps } from 'next';

const Page: NextPage<any, any> = () => {
  return (
    <Layout
      title={'The Greenwood Network'}
      description={'Black Owned Businesses all in one place'}
    >
      <div style={{ marginBottom: 200 }}>a.</div>
      <a href={`/api/auth/google`}>click me!</a>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Pass data to the page via props
  return {
    props: {},
  };
};

export default Page;
