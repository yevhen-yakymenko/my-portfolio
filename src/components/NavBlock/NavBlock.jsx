import { useState, useEffect, useRef } from 'react';

import BurgerMenu from 'components/BurgerMenu';

import { NavWrapper } from './NavBlock.styled';

const NavBlock = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const NavBox = useRef();
  const Burger = useRef();

  useEffect(() => {
    const handleCloseMenu = e => {
      if (e.target !== NavBox.current && e.target !== Burger.current) {
        NavBox.current.classList.remove('menu--open');
        document.body.classList.remove('modal-open');
        setIsOpen(false);
      }
    };

    if (!isOpen) {
      return;
    }

    document.addEventListener('click', handleCloseMenu);

    return () => {
      document.removeEventListener('click', handleCloseMenu);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    NavBox.current.classList.toggle('menu--open');
    setIsOpen(!isOpen);
    document.body.classList.toggle('modal-open');
  };

  return (
    <>
      <BurgerMenu
        aria-controls="MainNavList"
        switcher={isOpen}
        showMenu={toggleMenu}
        ref={Burger}
      />
      <NavWrapper as="nav" ref={NavBox}>
        {children}
      </NavWrapper>
    </>
  );
};

export default NavBlock;
