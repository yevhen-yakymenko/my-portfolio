import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';
import NavBlock from 'components/NavBlock';
import MainNavList from 'components/MainNavList';
import Footer from 'components/Footer';

const Layout = ({ getHeight }) => {
  return (
    <>
      <AppBar getHeight={getHeight}>
        <NavBlock>
          <MainNavList id="MainNavList" />
        </NavBlock>
      </AppBar>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
