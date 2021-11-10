import React from 'react';
import {Layout} from '../components/layout/Layout';
import { NextPage } from 'next';
import About from 'components/basic/About';
import BasicPageLayout from 'components/basic/BasicPageLayout';

const Page: NextPage<any, any> = () => {
  return (
    <Layout
      title={'The Greenwood Network'}
      description={'Black Owned Businesses all in one place'}
    >
      <BasicPageLayout>
      <About/>
      </BasicPageLayout>
    </Layout>
  );
};

export default Page;