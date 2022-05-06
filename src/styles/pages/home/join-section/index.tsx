/* eslint-disable no-alert */
import { useState } from "react";

import { BrandSolidButton, Input } from "@src/components";

import {
  Container,
  JoinSectionTitle,
  JointSectionForm,
  InnerSection,
  MobileSussesMessage,
  SmSussesMessage,
} from "./styles";

export function JoinSection() {
  const [isSent, setIsSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Form sent successfully!");
    setIsSent(true);
  };

  return (
    <Container>
      <InnerSection>
        <JoinSectionTitle>
          Learn how others are reaching their audience easier than ever before.
        </JoinSectionTitle>

        <JointSectionForm onSubmit={onSubmit}>
          <Input placeholder="Enter your email" />

          {isSent && (
            <MobileSussesMessage>Thanks! Email received</MobileSussesMessage>
          )}

          <BrandSolidButton type="submit">join our list</BrandSolidButton>
        </JointSectionForm>

        {isSent && <SmSussesMessage>Thanks! Email received</SmSussesMessage>}
      </InnerSection>
    </Container>
  );
}
