import React from "react"
import Layout from "../components/layout"
import Title from "../components/Title"
import styles from "../css/contact.module.css"

import { Container, Form, Col,Row, Button } from "react-bootstrap"

const contact = () => {
  return (
    <Layout>
      <Container>
        <section className={styles.contact}>
          <h3 className={styles.subtitle}>Got a question?</h3>
          <Title title="Contact Project Based Web Development"></Title>
          <Row>
            
            <Col lg="6">
              <Form name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    <input name="bot-field"  />
                  </label>
                </p>
                <Form.Group as={Row}>
                  <Col lg="12">
                    <Form.Control type="name" name="name" placeholder="Your Name*" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col lg="12">
                    <Form.Control type="email" name="email" placeholder="Your Email*" />  
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Col lg="12">
                    <Form.Control type="phone" name="phone" placeholder="Your Phone*" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Col lg="12">
                    <Form.Control type="text" name="business" placeholder="Your Business Type*" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Col lg="12">
                    <Form.Control as="textarea" name="message" rows="5" placeholder="How can we help?*" />
                  </Col>
                </Form.Group>

                <center>
                  <Form.Group as={Row} className="justify-content-center">
                    <Button variant="primary" type="submit" >
                      Send Message
                  </Button>
                  </Form.Group>
                </center>
              </Form>
            </Col>
            
            
            <Col lg="6" xs="12" className={styles.help}>
              <h5> How can we help?</h5>
              <ul className="col-lg-6 offset-lg-3">
                <li>Send us a message</li>
                <li>Start a conversation</li>
                <li>Get Inspired</li>
              </ul>
            </Col>
            
            
          </Row>
          
        </section>
      </Container>
    </Layout>
  )
}

export default contact
