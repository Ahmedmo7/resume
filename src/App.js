import './App.css';

import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (

    //Convert each of the labeled blocks into components as needed
    <div className="App">

    {/** Introduction */}
    <Jumbotron>
      <Container fluid>
      <Row>
        <Col>
        <h1>Ahmed Mohamed</h1>
        <h6>
      4th Year Computer Science Student
        </h6>
        </Col>
        <Col>
        <p>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. 
          Feugiat in fermentum posuere urna 
          nec tincidunt. Mi sit amet mauris 
          commodo quis imperdiet. Condimentum 
          mattis pellentesque id nibh tortor.
          </p>
        </Col>
      </Row>
      </Container>
    </Jumbotron>

    {/** Blurb */}
    <Container fluid="md">
      <Row>
        <Col>
        <h2>Contact Details</h2>
        </Col>
        <Col>
        <p><strong>Email: </strong>mohamed.ahmedelser23@gmail.com</p>
        <p><strong>LinkedIn: </strong>https://www.linkedin.com/in/ahmed-mohamed-b85686173/</p>
        <p><strong>GitHub: </strong>https://gtihub.com/Ahmedmo7 </p>
        </Col>
      </Row>
      <br></br>
    </Container>
   
    <Container fluid="md">
    <h1>Skills</h1>
    <br></br>
    <Row>
      <Col>
      <h5>Programming Languages</h5>
      </Col>
      <Col>
      <h5>Development Tools and Libraries</h5>
      </Col>
      <Col>
      <h5>Software Tools</h5>
      </Col>
    </Row>
    </Container>


    </div>

    
  );
}

export default App;
