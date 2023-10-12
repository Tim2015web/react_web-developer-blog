import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import img1 from '../assets/slide1.jpg';
import img2 from '../assets/slide2.jpg';


export function Aboutus() {
  return (
    <Container className='mt-3'>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>

          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={9}>
            <Tab.Content>

              <Tab.Pane eventKey="first">
                <h2>First tab content</h2>
                <img className='img-fluid' src={img1} alt="Image1" />
                <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sunt ab sit commodi alias illum, quam quod architecto quos pariatur molestiae provident neque ex est nam odit libero illo perspiciatis corrupti dolorem sint consequuntur corporis modi. Velit facilis quaerat laboriosam maxime illo labore. Earum eligendi fugit magnam doloremque similique expedita.</p>
              </Tab.Pane>

              <Tab.Pane eventKey="second">
                <h2>Second tab content</h2>
                <img className='img-fluid' src={img2} alt="Image2" />
                <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sunt ab sit commodi alias illum, quam quod architecto quos pariatur molestiae provident neque ex est nam odit libero illo perspiciatis corrupti dolorem sint consequuntur corporis modi. Velit facilis quaerat laboriosam maxime illo labore. Earum eligendi fugit magnam doloremque similique expedita.</p>
              </Tab.Pane>

            </Tab.Content>
          </Col>

        </Row>
      </Tab.Container>
    </Container>
  );
}