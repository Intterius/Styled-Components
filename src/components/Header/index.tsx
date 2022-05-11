import { Flex } from '../../styles/Flex.styled';
import { Button } from '../../styles/Button.styled';
import { StyledHeader, Nav, Logo, Image } from './Header.styled';
import { Container } from 'src/styles/Container.styled';
import logo from 'src/assets/images/logo.svg';
import ilustration from 'src/assets/images/illustration-mockups.svg';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} alt='' />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>
          <Image src={ilustration} alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
