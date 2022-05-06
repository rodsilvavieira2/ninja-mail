import Image from "next/image";

import createEmailBg from "@public/creating-email-person.png";
import {
  BrandSolidLinkButton,
  OutlinedBrandLinkButton,
} from "@src/components/links";

import {
  Container,
  CreateEmailButtonWrapper,
  CreateEmailSectionImageWrapper,
  CreateEmailSubText,
  CreateEmailText,
  CreateEmailTextWrapper,
  InnerSection,
} from "./styles";

export function CreateEmailSection() {
  return (
    <Container>
      <InnerSection>
        <CreateEmailTextWrapper>
          <CreateEmailText>Create Stunning Email Campaigns</CreateEmailText>

          <CreateEmailSubText>
            Create and launch email campaigns that captivate your customers in
            just a few clicks.
          </CreateEmailSubText>

          <CreateEmailButtonWrapper>
            <BrandSolidLinkButton href="/">try now</BrandSolidLinkButton>

            <OutlinedBrandLinkButton href="/">
              get a demo
            </OutlinedBrandLinkButton>
          </CreateEmailButtonWrapper>
        </CreateEmailTextWrapper>

        <CreateEmailSectionImageWrapper>
          <Image layout="fill" src={createEmailBg} />
        </CreateEmailSectionImageWrapper>
      </InnerSection>
    </Container>
  );
}
