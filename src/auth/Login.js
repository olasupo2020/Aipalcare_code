import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Row, Col, Image } from "react-bootstrap";
import { useAuth } from "./AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import info from '../images/png15.png';
import logo from "../images/png14.png"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <nav className="navbar navbar-light bg-transparent">
        <div className="container">
          <a className="navbar-brand" href>
            <img src={logo} alt="logo"
              height="170"
              style={{ marginTop: "-60px", marginBottom: "-60px" }}
            />
          </a>
        </div>
      </nav>
      <Container>
        <Row>
          <Col sm={6}>
            <Image src={info} fluid />
          </Col>
          <Col className="mt-5" sm={6}>
            <Container>
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                  <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                      <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                      </Form.Group>
                      <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                      </Form.Group>
                      <Button disabled={loading} className="w-100 mt-3" variant="info" type="submit">
                        Log In
            </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                      <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                  </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                  Need an account? <Link to="/signup">Sign Up</Link>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>

    </>
  )
}
