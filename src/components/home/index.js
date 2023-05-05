import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import Context from '../../context';
import Banner from '../../img/banner.png';
import { useNavigate } from "react-router-dom"


export default () => {

    
    const { pizzas, setPizzas, cart, setCart } = useContext(Context);


    const navigate = useNavigate();

    const goToPizza = (id) => {
    navigate(`/pizza/${id}`);
    };

    const addToCart = (pizza) => {
        setCart([...cart, pizza]);
    }

    return ( 
        <div className="home-class">
            <div> <img src={Banner} alt="banner" />
            </div>
            <Container>
                <Row>
                    {pizzas ? pizzas.map(pizza =>
                        <Col lg={4} md={12} className='my-4'>
                            <Card>
                                <Card.Img variant="top" src={pizza.image} />
                                <Card.Body>
                                    <Card.Title>{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</Card.Title>
                                    <hr></hr>
                                    <Card.Text>
                                        <p>Ingredientes:</p>
                                        <ul>{pizza.ingredients.map((ingrediente, index) => (
                                            <li key={index}>{ingrediente}</li>))}
                                        </ul>
                                        <h5>$ {pizza.precio}</h5>
                                    </Card.Text>
                                    <hr></hr>
                                    <div className='gap-3 d-md-flex justify-content-md-center'>
                                    <Button variant="primary" onClick={() => goToPizza(pizza.id)}>Ver Más</Button>
                                    <Button variant="danger" onClick={() => addToCart(pizza)}>Añadir</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ) : <p>loading...</p>}
                </Row>
            </Container>    
        </div>
    )
}
