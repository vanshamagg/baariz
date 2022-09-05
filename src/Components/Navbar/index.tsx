import { Button, Col, Row } from 'antd';
import '../Navbar/Navbar.css';

export function Navbar() {
  return (
    <>
      <Row gutter={10}>
        <Col span={8}>
          <Row>
            <Col>
            
            </Col>
          </Row>
          <Button className='logo'>
            Candidate Bazaar
          </Button>
        </Col>
        <Col span={8}>
          <Row justify='center'>
            <Col>
              <Button className='navbar-button'>Home</Button>
            </Col>
            <Col>
              <Button className='navbar-button'>Employer</Button>
            </Col>
            <Col>
              <Button className='navbar-button'>Candidate</Button>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row justify='center'>
            <Col>
              <Button className='login-button' type='link'> Login</Button>
            </Col>
            <Col>
              <Button className='post-job-button'> Post a Job</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}