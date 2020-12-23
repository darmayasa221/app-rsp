import React from 'react'
import './WorkingSpace.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import material_approval from '../../asset/png/material_approval.png' 
import material_bolt from '../../asset/png/material_bolt.png' 
export const WorkingSpace = () => {
  return (
    <Container>
      <Row className="ws">
        <Col xs={12}>
          <h2>Apa Yang Refactory Dapat Bantu?</h2>
        </Col>
        <Col className="text-one" xs={6}>
          <img src={material_approval} alt="one"/>
          <h2>Memperkuat Tim <em>Engineer</em> Anda</h2>
          <p>Bisnis di jaman modern membutuhkan keterampilan pengembangan terbaik untuk meningkatkan skala produk. Kami dapat mempersiapkan course dan juga dapat menyediakan tim yang menangani kebutuhan digital Anda.</p>
        </Col>
        <Col className="text-two" xs={6}>
          <img src={material_bolt} alt="two"/>  
          <h2>Wujudkan <em>Software</em> Impian Anda</h2>
          <p>Kami adalah perusahaan One-Stop IT Solution untuk proyek Anda, membantu di setiap tahap mulai dari menyusun ide, melalui desain dan pengembangan aplikasi seluler, situs web dan aplikasi desktop, hingga peluncuran produk.</p>
        </Col>
      </Row>
    </Container>
  )
}
