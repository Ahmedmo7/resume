import './App.css';
import * as React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Typed from "react-typed";
import td from './tdlogo.png';
import mp from './mpLogo.jpg';
import cura from './cura.png';
import uwo from './uwo.png'
import Figure from 'react-bootstrap/esm/Figure';
import { Animated } from 'react-animated-css';


function App() {

  return (
    //Convert each of the labeled blocks into components as needed
    <div className="App"
      style={{
        background: "linear-gradient(87deg, #172b4d 0,  #0062cc 100%)",
      }}
    >

      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
      </head>

      {/** Introduction */}
      <Jumbotron>
        <Container fluid>
          <Row>
            <Col>
              <Typed
                strings={['<h3>Ahmed Mohamed</h3>']}
                typeSpeed={60}
                showCursor={false}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Typed
                strings={['<h5>4th year Computer Science Student </h5>']}
                typeSpeed={50}
                startDelay={30}
                showCursor={false}
              />
            </Col>
          </Row>

        </Container>
        <br></br>
      </Jumbotron>

      {/** Contact Details */}
      <Container >
        <h2 style={{ color: "white" }}>Contact Details</h2>
        <br></br>
        <Card>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Col>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-mailbox2" viewBox="0 0 16 16">
                <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z" />
                <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z" />
              </svg>
              <br></br>
              <br></br>
              <a href="mailto:mohamed.ahmedelser23@gmail.com">
                <h5>Email</h5>
              </a>
            </Col>
            <Col>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              <br></br>
              <br></br>
              <a href="https://www.linkedin.com/in/ahmed-mohamed-b85686173/" target="0"><h5>LinkedIn</h5></a>
              <br></br>
              <br></br>
            </Col>

            <Col>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <br></br>
              <br></br>
              <a href="https://github.com/Ahmedmo7" target="0"><h5>GitHub</h5></a>
            </Col>
          </Row>
        </Card>
        <br></br>
        {/* <Row>
      <h2>Skills</h2>

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
    <br></br>

      </Row> */}

      </Container>

      <Container>
        <h2 style={{ color: "white" }}>Education</h2>
        <br></br>
        <Animated animationIn="slideInLeft" animationOut="fadeOutUp" animationInDuration={6000} animationOutDuration={800} isVisible={true}>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Figure>
                    <Figure.Image
                      width={171}
                      height={180}
                      alt="171x180"
                      src={uwo}
                    />
                  </Figure>
                  <h5>Western University</h5>
                  <p>May 2018 - June 2022</p>
                </Card.Header>
                <Card.Body>
                  <Card.Title>BSc Major in Computer Science</Card.Title>
                  <Card.Text>
                    President of Computer Science Undergraduate Society, Junior Varsity Volleyball, Western AI Project Team Member, Intramural Sports
                   </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Animated>
        <br></br>
      </Container>

      {/** Experience*/}
      <Container>
        <br></br>
        <h2 style={{ color: "white" }}>Experience</h2>
        <br></br>
        <br></br>
        <Animated animationIn="bounceInLeft" animationOut="fadeOutUp" animationInDuration={11000} animationOutDuration={800} isVisible={true}>
          <Row>
            <Col md={{ span: 7, offset: -5 }}>
              <Card>
                <Card.Header>
                  <Figure>
                    <Figure.Image
                      width={171}
                      height={180}
                      alt="171x180"
                      src={td}
                    />
                  </Figure>
                  <h5>TD Bank Group</h5>
                  <p>May 2021 - August 2021</p>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Business Analyst - IT Specialist Intern</Card.Title>
                  <Card.Text>
                    4-month Summer Internship, in the Innovative Automation Corporate Hub
                   </Card.Text>
                  <Card.Text>
                    Maintain and create internal corporate websites using HTML/CSS
                   </Card.Text>
                  <Card.Text>
                    Used Software Design Specifications to create a canvas app that utilized a CDS database to manage form requests
                   </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Animated>
        <br></br>

        <Animated animationIn="bounceInRight" animationOut="fadeOutUp" animationInDuration={13000} animationOutDuration={800} isVisible={true}>
          <Row>
            <Col md={{ span: 7, offset: 5 }}>
              <Card>
                <Card.Header>
                  <Figure>
                    <Figure.Image
                      width={171}
                      height={180}
                      alt="171x180"
                      src={mp}
                    />
                  </Figure>
                  <h5>MP Web Consulting</h5>
                  <p>August 2020 - present</p>
                </Card.Header>
                <Card.Body>
                  <Card.Title>CoFounder and Lead Development Consultant</Card.Title>
                  <Card.Text>
                    Co-founded a web development and consulting firm.
                   </Card.Text>
                  <Card.Text>
                    Managed full-stack development of websites and web applications.
                   </Card.Text>
                  <Card.Text>
                    Used Django-bootstrap as the main stack for our projects
                   </Card.Text>
                  <Card.Text>
                    Organize meetings with clients to determine project requirements and specifications
                   </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Animated>
        <br></br>

        <Animated animationIn="bounceInLeft" animationOut="fadeOutUp" animationInDuration={15000} animationOutDuration={800} isVisible={true}>
          <Row>
            <Col md={{ span: 7, offset: -5 }}>
              <Card>
                <Card.Header>
                  <Figure>
                    <Figure.Image
                      width={171}
                      height={180}
                      alt="171x180"
                      src={cura}
                    />
                  </Figure>
                  <h5>Curabit</h5>
                  <p>July 2020 - present</p>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Software Engineer</Card.Title>
                  <Card.Text>
                    used ploty.js for data visualization and topic analysis on the client facing dashboard.
                  </Card.Text>
                  <Card.Text>
                    wrote a tutorial article on how to use the Flair NPL api to create your first text classifier
                     </Card.Text>
                  <Card.Text>
                    researched various NLP machine learning models to better optimize the service.
                   </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br></br>
        </Animated>
        <Animated animationIn="bounceInRight" animationOut="fadeOutUp" animationInDuration={17000} animationOutDuration={800} isVisible={true}>

          <Row>
            <Col md={{ span: 7, offset: 5 }}>
              <Card>
                <Card.Header>
                  <Figure>
                    <Figure.Image
                      width={171}
                      height={180}
                      alt="171x180"
                      src={uwo}
                    />
                  </Figure>
                  <h5>Western University</h5>
                  <p>September 2019 - April 2020</p>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Assistant Web Developer</Card.Title>
                  <Card.Text>
                    A member of the Western University Web Team that ensures the accessibility and overall structure of the .uwo.ca sites
                   </Card.Text>
                  <Card.Text>
                    Created a python app that will generate code for an svg based on the UWO Web guidelines using the webbrowser module.
                   </Card.Text>
                  <Card.Text>
                    Used googles dialogue flow to develop a FAQ chatbot that can be embedded into the specific .uwo webpages.
                   </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Animated>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      </Container>

      <Container>
        <h2 style={{ color: 'white' }}>Projects</h2>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <br></br>
                <h5>DermaGO</h5>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <a href='https://github.com/Ahmedmo7/dermago' target="0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  </a>
                </Card.Title>
                <Card.Text>
                  Created a mobile application for Hack Schulich hosted by the Schulich Medical School at Western University. Placed 2nd overall in
                  event.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Header>
                <br></br>
                <h5>COV¿D</h5>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                <a href='https://github.com/niampattni/covid' target ="0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  </a>
                </Card.Title>
                <Card.Text>
                  Developed a machine learning web application that uses a convolution neural network to diagnose seven different types of skin
                  cancer
                </Card.Text>
              </Card.Body>
            </Card>

          </Col>
        </Row>
        <br></br>
      </Container>

    </div>

  );
}

export default App;
