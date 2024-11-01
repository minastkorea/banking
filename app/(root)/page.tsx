'use client';
import React, { useEffect } from 'react';
import HeaderBox from '../../components/HeaderBox';
import TotalBalanceBox from '../../components/TotalBalanceBox';
import { load } from '@2gis/mapgl';
import RightSidebar from '../../components/RightSidebar';

const Home = () => {
  const loggedIn = { firstName: 'rei', lastName: 'Won', email: 'rei@' };

  // useEffect(() => {
  //   load().then((mapglAPI) => {
  //     new mapglAPI.Map('map', {
  //       // c32386fe-09d1-4d5c-ab47-5dde5ceeddcb
  //       key: '5b892f67-1ef7-4a42-834a-c9204473af93',
  //       //key: 'c32386fe-09d1-4d5c-ab47-5dde5ceeddcb',
  //       center: [37.617633, 55.755864],
  //       zoom: 10,
  //     });
  //   });
  // }, []);

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
        {/* 
       <div id="map"></div>
       */}
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
      />
    </section>
  );
};

export default Home;
