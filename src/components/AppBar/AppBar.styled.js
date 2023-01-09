import styled from 'styled-components';

export const MainHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  background-color: ${p => p.theme.colors.backgroundPrimary};
  /* border-bottom: 2px solid ${p => p.theme.colors.textSecondary}; */

  z-index: 10;
`;

export const StyledContainer = styled.div.attrs(_ => ({
  className: 'container',
}))`
  display: flex;
  align-items: center;
  min-height: 60px;

  @media screen and (max-width: calc(${p => p.theme.breakpoints[0]} - 0.6px)) {
    position: relative;
  }
`;
