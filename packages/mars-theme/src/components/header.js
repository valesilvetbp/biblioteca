import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import Colors from "../colors";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <MobileMenu />
        <Nav />
      </Container>
    </>
  );
};

export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: ${Colors.primary};
  display: flex;
  alig-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0;
  width: 300px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
