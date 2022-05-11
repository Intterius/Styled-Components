import { ThemeProvider } from 'styled-components';
import { Container } from './styles/Container.styled';
import Footer from './components/Footer';
import Card from './components/Card';
import GlobalStyles from './styles/Global';
import content from './mock/content';
import Header from './components/Header';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
