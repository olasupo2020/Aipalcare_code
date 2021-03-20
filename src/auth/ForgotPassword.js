import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container, Row, Col, Image } from "react-bootstrap";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import info from "../images/png15.png";
import logo from "../images/png14.png"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
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
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                      <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                      </Form.Group>
                      <Button disabled={loading} className="w-100 mt-3" type="submit" variant="info">
                        Reset Password
            </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                      <Link to="/login">Login</Link>
                    </div>
                  </Card.Body>
                </Card>
                {/* <div className="w-100 text-center mt-2">
                  Need an account? <Link to="/signup">Sign Up</Link>
                </div> */}
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}
