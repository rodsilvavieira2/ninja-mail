import styled from "styled-components";

import { BaseLinkButton } from "./base-link-button";

export const WhiteSolidLinkButton = styled(BaseLinkButton)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.brand};
`;
