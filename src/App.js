import './App.css';
import * as React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Typed from "react-typed";
import profile from './profile.png';
import {Fullpage,Slide,HorizontalSlider} from 'fullpage-react';



function App() {


  return (
    //Convert each of the labeled blocks into components as needed
    <div className="App">

    {/** Introduction */}
    <Jumbotron>
      <Container fluid>
      <Row>
        <Col>
        <Typed
            strings={['<h3>Ahmed Mohamed</h3>']}
            typeSpeed={50}
            showCursor = {false}
            />
            </Col>
      </Row>
      <Row>
      <Col>
            <Typed
            strings={['<h5>4th year Computer Science Student </h5>']}
            typeSpeed={80}
            startDelay ={30}
            showCursor = {false}
            />
            </Col>
      </Row>

      </Container>
    </Jumbotron>

    {/** Contact Details */}
    <Container >
      <h2>Contact Details</h2>
      <br></br>
      <Row>
        <Col>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-mailbox2" viewBox="0 0 16 16">
          <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z"/>
          <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z"/>
      </svg>    
      <br></br>
      <br></br>
      <a href="mailto:mohamed.ahmedelser23@gmail.com">
        <h5>Email</h5>
      </a>
        </Col>
        <Col>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg>
        <br></br>
        <br></br>
        <a href="https://www.linkedin.com/in/ahmed-mohamed-b85686173/" target="0"><h5>LinkedIn</h5></a>
        </Col>
        <Col>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        <br></br>
        <br></br>
        <a href="https://github.com/Ahmedmo7" target="0"><h5>GitHub</h5></a>
        </Col>
      </Row>
      
      
      <br></br>
    </Container>
   
   {/**Skills Section */}
    <Container >
      <br></br>
    <h2>Skills</h2>
    <br></br>
    <Row>
      <Col>
      <h5>Programming Languages</h5>
        Python, Java, JavaScript, C, SQL, R ,HTML/CSS
      </Col>
      <Col>
      <h5>Development Tools and Libraries</h5>
      Django, Flask, React.js, Flutter, MSFT Power Platform
      </Col>
      <Col>
      <h5>Software Tools</h5>
      Git, Unix, Linux, Jira, Confluence, Bootstrap, Azure
      </Col>
    </Row>
    <br></br>
    </Container>



    {/** Experience*/}
    <Container>

      <h2>Projects</h2>
        <br></br>
        <Row>
          <Col md={{ span: 3, offset: 3}}>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={profile} />
              <Card.Body>
                <Card.Title>COVID</Card.Title>
                <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        </Row>
<br></br>
<br></br>
<br></br>

        <Row>
        <Col md={{ span: 6, offset: 6 }}>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={profile} />
              <Card.Body>
                <Card.Title>COVID</Card.Title>
                <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        </Row>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


    </Container>


    {/* <Container>
      <br></br>
      <h2>Projects</h2>
      <br></br>
      <Row>
        <Col>
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src={"profile.png"} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
           Some quick example text to build on the card title and make up the bulk of
          the card's content.
              </Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src="profile.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
           Some quick example text to build on the card title and make up the bulk of
          the card's content.
              </Card.Text>
          </Card.Body>
        </Card>
        </Col>

      </Row>

    </Container> 
    */}





    </div>

    
  );
}

export default App;
