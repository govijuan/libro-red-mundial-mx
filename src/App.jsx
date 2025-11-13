import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import TopNav from "./components/molecules/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <Container>
        <Row>
          <Col>
            <Button variant="primary">Primary</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
