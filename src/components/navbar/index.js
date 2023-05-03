import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

export default () => {
    return (
        <>
        <Navbar bg="primary" variant='dark'>
            <Container>
                <Nav className="me-auto">
                    <Link className="text-white ms-6 text-decoration-none" to="/">Pizzería Mamma Mia!</Link>
                </Nav>
                <Nav>
                    <Link className="text-white ms-3 text-decoration-none"to="/cart">Carrito de Compras</Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}