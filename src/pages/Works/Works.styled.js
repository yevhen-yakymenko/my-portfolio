import styled from 'styled-components';

export const WorksSection = styled.section.attrs(props => ({
  className: 'section-wrapper',
}))`
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

export const StyledContainer = styled.div.attrs(props => ({
  className: 'container',
}))`
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 0 ${p => p.theme.space[4]};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    padding: 0 ${p => p.theme.space[5]};
  }

  & > h1 {
    margin-bottom: ${p => p.theme.space[3]};
    font-size: ${p => p.theme.fontSizes[6]};

    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      font-size: ${p => p.theme.fontSizes[7]};
      margin-bottom: ${p => p.theme.space[4]};
    }

    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      font-size: ${p => p.theme.fontSizes[8]};
    }
  }
`;

export const WorksLict = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]};

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    gap: ${p => p.theme.space[4]};
  }
`;

export const WorksItem = styled.li`
  padding-top: ${p => p.theme.space[3]};
  padding-bottom: ${p => p.theme.space[3]};
  padding-left: ${p => p.theme.space[2]};
  padding-right: ${p => p.theme.space[2]};

  background-color: ${p => p.theme.colors.backgroundPrimary};
  border-radius: ${p => p.theme.radii[0]};
  border-bottom: 0.0625rem solid #e0e0e0;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-top: ${p => p.theme.space[4]};
    padding-bottom: ${p => p.theme.space[4]};
    padding-left: ${p => p.theme.space[3]};
    padding-right: ${p => p.theme.space[3]};
    display: flex;
    gap: ${p => p.theme.space[4]};
  }

  & > div {
    flex: 1 1 50%;
  }
`;

export const ImgBox = styled.div`
  @media screen and (max-width: calc(${p => p.theme.breakpoints[1]} - 0.6px)) {
    margin-bottom: ${p => p.theme.space[3]};
  }

  & > a {
    display: block;
    max-width: max-content;
    min-height: 7.5rem;

    border: 0.0625rem solid #e0e0e0;
    border-radius: ${p => p.theme.radii[0]};
    overflow: hidden;

    transition: transform ${p => p.theme.transitions.main};

    &:hover {
      transform: scale(1.02);
    }

    @media screen and (min-width: ${p => p.theme.breakpoints[0]}) {
      min-height: 11.875rem;
    }
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]};

  & > p {
    line-height: 1.5;
  }
`;

export const WorkTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes[6]};
  line-height: 1.25;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[7]};
  }
`;

export const WorkFilter = styled.p`
  font-size: 14px;
  letter-spacing: 0.03em;
  color: #757575;
`;

export const StackText = styled.p`
  color: ${p => p.theme.colors.textLight};

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[5]};
  }
`;

export const LinksList = styled.div`
  display: flex;
  gap: ${p => p.theme.space[4]};

  & > a {
    font-size: ${p => p.theme.fontSizes[7]};
    color: ${p => p.theme.colors.text};

    transition: color ${p => p.theme.transitions.main};

    &:hover {
      color: ${p => p.theme.colors.textAccent};
    }

    & > span {
      display: flex;
    }
  }
`;
