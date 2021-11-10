import React, { useState } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { Sidebar, validStates } from 'components/dashboard/Sidebar';
import styles from 'components/dashboard/wrapper.module.scss';
import { AdminNavBar } from 'components/dashboard/AdminNavBar';
import { Profile } from 'components/dashboard/Pages/Profile';
import { useGetTokensQuery } from 'generated/graphql';
import { Businesses } from 'components/dashboard/Pages/Businesses';

const Page: NextPage<any, any> = (props) => {
  const [sidenavOpen, setSidenavOpen] = useState(true);
  const [dashboardState, setDashboardState] = useState<validStates>(validStates.profile)
  const { data, loading, error } = useGetTokensQuery();

  if (loading) {
    return <>loading...</>;
  } else if (error) {
    return <>error with query...</>;
  } else if (data) {
    const user = data.getTokens.user;

    const page = (dashboardState: validStates) => {
      switch (dashboardState) {
        case validStates.profile:
          return <Profile user={user} />
        case validStates.businesses:
          return <Businesses />
        default:
          break;
      }
    }

    return (
      <div className={styles.wrapper}>
        <Sidebar sidenavOpen={sidenavOpen} toggleSidenav={setSidenavOpen} currentState={dashboardState} onChangeState={setDashboardState} />
        <div className={styles.page}>
          <AdminNavBar />
          {page(dashboardState)}
          <div>Footer</div>
        </div>
      </div>
    );
  }

};

export default Page;
