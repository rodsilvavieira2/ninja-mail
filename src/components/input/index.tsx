import styled from "styled-components";

export const Input = styled.input`
  color: inherit;

  appearance: none;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 0.9375rem;
  letter-spacing: 0.65px;

  padding: 0.8125rem 0.875rem;

  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 5px;

  background-color: ${(props) => props.theme.colors.primary};

  &::placeholder {
    color: inherit;
  }
`;
