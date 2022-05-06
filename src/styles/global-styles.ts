import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1rem;

  color:  ${(props) => props.theme.colors.text.primary};
 }

 a {
   text-decoration: none;
   color: inherit;
   font-family: inherit;
 }

 ul {
   list-style: none;
 }
`;
