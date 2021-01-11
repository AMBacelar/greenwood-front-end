import React from 'react';
import {Layout} from '../components/layout/Layout';
import { NextPage } from 'next';
import Conditions from 'components/basic/Conditions';

const Page: NextPage<any, any> = () => {
  return (
    <Layout
      title={'The Greenwood Network'}
      description={'Black Owned Businesses all in one place'}
    >
      <Conditions/>
    </Layout>
  );
};

export default Page;