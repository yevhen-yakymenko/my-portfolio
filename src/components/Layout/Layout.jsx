import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';
// import LogoLink from 'components/LogoLink/';
import NavBlock from 'components/NavBlock';
import MainNavList from 'components/MainNavList';

const Layout = ({ getHeight }) => {
  return (
    <>
      <AppBar getHeight={getHeight}>
        {/* <LogoLink to={'/'} title="Home" /> */}

        <NavBlock>
          <MainNavList id="MainNavList" />
        </NavBlock>
      </AppBar>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>Foter</footer>
    </>
  );
};

export default Layout;
