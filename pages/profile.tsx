import React from 'react';
import {Layout} from '../components/layout/Layout';
import { NextPage } from 'next';

const Page: NextPage<any, any> = () => {
  return (
    <Layout
      title={'The Greenwood Network'}
      description={'Black Owned Businesses all in one place'}
    >
      <div style={{ marginBottom: 200 }}>Profile page</div>
    </Layout>
  );
};

export default Page;
