import React from 'react'
import {Container,Row,Col} from "react-bootstrap"

const FormContainer = ({props}) =>{
      return(
          <Container>
              <Row>
                  <Col xs={12} md={6}>
                      {props}
                  </Col>
              </Row>
          </Container>
      )
}

export default FormContainer;
