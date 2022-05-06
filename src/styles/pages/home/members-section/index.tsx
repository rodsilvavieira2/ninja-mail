import { MemberCard } from "@src/components";

import { members } from "../home.conf";
import { Container, InnerSection } from "./styles";

export function MembersSection() {
  return (
    <Container>
      <InnerSection>
        {members.map((member) => (
          <MemberCard key={member.id} {...member} />
        ))}
      </InnerSection>
    </Container>
  );
}
