import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Fragment } from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { WorkingSpace } from '../../components/WorkingSpace/WorkingSpace'

const Home = () => {
  return (
    <Fragment>
    <Navbar className="nav"/>
    <Jumbotron fluid className="jumbotron">
      <Container>
        <Row>
          <Col xs={6}>
            <div className="text-one">
              Empowering 
              <span> People </span> 
              Through Programming 
            </div>
            <div className="text-two">
              Refactory adalah perusahaan edukasi dan teknologi yang menyediakan layanan lengkap berupa
              <i>course </i>
              maupun <em> custom training</em> yang materinya dapat disesuaikan dengan kebutuhan teknologi dan bisnis perusahaan Anda.
            </div>
            <Row>
              <Col xs={6}>
                <Button className="btn-one" variant="outline-warning" block>Temukan Solusi Anda</Button>
              </Col>
              <Col xs={6}>
                <Button className="btn-two" variant="outline-warning" block>Tingkatkan Skill Anda</Button>
              </Col>
            </Row>
          </Col>
          <Col xs={6}></Col>
        </Row>
      </Container>
    </Jumbotron>
    <WorkingSpace/>
  </Fragment>
  )
}

export default Home;
