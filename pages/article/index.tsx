import React from 'react';
import {Layout} from '../../components/layout/Layout';
import { NextPage, GetServerSideProps } from 'next';
import MailingListBanner from 'components/mailingListBanner/MailingListBanner';

const Page: NextPage<any, any> = () => {
  return (
    <Layout
      title={'The Greenwood Network'}
      description={'Black Owned Businesses all in one place'}
    ><div>HELLOO</div>
        {/** Area to wrtie code */}
        <MailingListBanner/>
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
