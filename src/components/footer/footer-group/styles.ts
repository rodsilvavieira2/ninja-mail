import styled from "styled-components";

export const Container = styled.nav`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 0.875rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    font-size: 1.05rem;
    line-height: 1.2rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    font-size: 1.1875rem;
    line-height: 1.375rem;
  }
`;

export const LinkGroupTitle = styled.h3`
  margin-bottom: 0.625rem;
`;

export const Links = styled.ul`
  list-style: none;

  > li + li {
    margin-top: 0.4375rem;
  }
`;

export const LinkItem = styled.a`
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
`;
