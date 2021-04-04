import React, { useState } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { Sidebar } from 'components/dashboard/Sidebar';
import styles from 'components/dashboard/wrapper.module.scss';
import { AdminNavBar } from 'components/dashboard/AdminNavBar';
import { Profile } from 'components/dashboard/Pages/Profile';
import { useGetTokensQuery } from 'generated/graphql';

const Page: NextPage<any, any> = (props) => {
  const [sidenavOpen, setSidenavOpen] = useState(true);
  const { data, loading, error } = useGetTokensQuery();

  if (loading) {
    return <>loading...</>;
  } else if (error) {
    return <>error with query...</>;
  } else if (data) {
    const user = data.getTokens.user

    return (
      <div className={styles.wrapper}>
        <Sidebar sidenavOpen={sidenavOpen} toggleSidenav={setSidenavOpen} />
        <div className={styles.page}>
          <AdminNavBar />
          <Profile user={user} />
          <div>Footer</div>
        </div>
      </div>
    );
  }

};

export default Page;
