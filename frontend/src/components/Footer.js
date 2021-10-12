import React from 'react'
import { Container , Row , Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="text-centre py-3">
      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>Copyright &copy; Lucien </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
