import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import cartIcon from "../../img/carrito.png"
import logo from "../../img/pizza.png"

export default () => {
    return (
        <>
        <Navbar bg="primary" variant='dark'>
            <Container>
                <Nav className="me-auto">
                    <img src={logo} alt="Logo" width="50" height="24" />
                    <Link className="text-white ms-2 text-decoration-none" to="/">Pizzería Mamma Mia!</Link>
                </Nav>
                <Nav>
                    <img src={cartIcon} alt="Carrito" width="25" height="24" />
                    <Link className="text-white ms-2 text-decoration-none"to="/cart">Carrito de Compras</Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}