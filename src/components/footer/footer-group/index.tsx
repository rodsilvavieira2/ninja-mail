import { LinkGroupTitle, Links, LinkItem, Container } from "./styles";

type FooterLinkItem = {
  id: number;
  label: string;
  link: string;
};

type FooterGroupProps = {
  title: string;
  items: FooterLinkItem[];
};

export function FooterGroup({ items, title }: FooterGroupProps) {
  return (
    <Container>
      <LinkGroupTitle>{title}</LinkGroupTitle>

      <Links>
        {items.map((item) => (
          <li key={item.id}>
            <LinkItem href={item.link}>{item.label}</LinkItem>
          </li>
        ))}
      </Links>
    </Container>
  );
}
