import './App.css';
import FCTToken from './artifacts/contracts/FCTToken.sol/FCTToken.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

function App() {

  const Token = FCTToken;

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <div>our faucet</div>
          </Col>
          <Col>
            <div> our send area</div>
          </Col>
        </Row>
      </Container>
      <Faucet tokenContract={Token}/>
    </div>
  );
}

export default App;
