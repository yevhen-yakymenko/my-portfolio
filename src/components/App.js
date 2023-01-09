import { useState, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';

import { GlobalStyle } from './GlobalStyle';

const HomePage = lazy(() => import('../pages/HomePage'));
const About = lazy(() => import('../pages/About'));
const Works = lazy(() => import('../pages/Works'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  // ------------------------------------------------
  // geting the header height value

  const [height, setHeight] = useState(0);

  const getHeight = height => {
    setHeight(height);
  };

  // -------------------------------------------------
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout getHeight={getHeight} />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="works" element={<Works />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
      <GlobalStyle headerHeight={height} />
    </>
  );
};
