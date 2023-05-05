import { useEffect, useState } from "react";
import { Row, Col, Button, Card} from "react-bootstrap"
import { useParams } from "react-router-dom";
import { useContext } from 'react'
import Context from '../../context'
import { useNavigate } from 'react-router-dom'

export default () => {

    const navigate = useNavigate();

    const { id } = useParams()

    const [pizza, setPizza] = useState({});
    const { pizzas, setPizzas, cart, setCart } = useContext(Context);

    const addToCart = (pizza) => {
        setCart([...cart, pizza]);
    }

    useEffect(() => {
        let pizza = pizzas.find(val => val.id == id);
        setPizza(pizza);
    },[id])

    const formattedName = pizza.name ? pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1) : '';

    return (
        <Row>
            <Col className='my-4' md={{ span: 6, offset: 3 }}>
                <Card>
                    <Card.Img variant="top" src={pizza.image} />
                    <Card.Body>
                        <h1>{formattedName}</h1>
                        <hr></hr>
                        <Card.Text>
                            {pizza.descripcion}
                        </Card.Text>
                        <ul>
                            {pizza.ingredients && pizza.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <hr></hr>
                        <h5>Precio: ${pizza.precio}</h5>
                        <div className='gap-3 d-md-flex justify-content-md-center'>
                        <Button variant="primary" onClick={() => addToCart(pizza)}>Agregar al carrito</Button>
                        <Button variant="primary" onClick={() => navigate('/')}>Volver</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
    
}