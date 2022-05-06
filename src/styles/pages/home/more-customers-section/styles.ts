import Image from "next/image";
import styled from "styled-components";

import { WhiteSolidLinkButton } from "@src/components/links";

export const Container = styled.section`
  display: flex;

  height: 10.6875rem;

  margin-top: 2.61125rem;

  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    height: 20rem;

    margin-top: 3.75rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    margin-top: 11.375rem;
    height: 21.6875rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    margin-top: 14rem;
    height: 28rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    margin-top: 17.4375rem;
    height: 33.1875rem;
  }
`;

export const InnerSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;

  width: 100%;
  margin: 0 auto;

  > a,
  p {
    z-index: 2;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    max-width: 85%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    max-width: 38.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    max-width: 65%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    max-width: 62.125rem;
  }
`;

export const LearnButtonLink = styled(WhiteSolidLinkButton)`
  font-weight: 900;
  font-size: 0.375rem;
  line-height: 0.4375rem;
  text-align: center;
  letter-spacing: 0.3px;

  height: 1.3125rem;
  padding: 0 0.8125rem;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    height: 2.1875rem;

    font-size: 0.866rem;

    padding: 0 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    height: 3rem;

    font-size: 1rem;
    line-height: 1.2rem;

    padding: 0 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    height: 4.0625rem;

    padding: 0 2rem;

    font-size: 1.3125rem;
    line-height: 1.5625rem;

    letter-spacing: 1.05px;
  }
`;

export const MoreCustomersImage = styled(Image)`
  z-index: 1;
`;

export const MoreCustomersSectionText = styled.h1`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 1.375rem;
  font-weight: 900;
  line-height: 1.8125rem;

  text-align: center;

  margin-bottom: 1.6875rem;

  z-index: 2;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    font-size: 1.875rem;
    line-height: 3.1875rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    font-size: 2.5rem;
    line-height: 3.2rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    font-size: 3.75rem;
    line-height: 5rem;

    margin-bottom: 3.8125rem;
  }
`;
