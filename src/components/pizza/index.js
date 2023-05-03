import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { useContext } from 'react'
import Context from '../../context'
import { useNavigate } from 'react-router-dom'

export default () => {

    const navigate = useNavigate();

    const { id } = useParams()

    const [pizza, setPizza] = useState({});
    const { pizzas } = useContext(Context);

    useEffect(() => {
        let pizza = pizzas.find(val => val.id == id);
        setPizza(pizza);
    },[id])

    return (
        <>
            {pizza ?
                <Row>
                    <Col className="d-flex justify-content-center my-2"><img src={pizza.image}></img></Col>
                    <Col className="my-5">
                        <h1>{pizza.name}</h1>
                        <p style={ {width: '500px'}}>{pizza.descripcion}</p>
                        <p>$ {pizza.precio}</p>
                        <p>Ingredientes: {pizza.ingredients}</p>
                        <Button variant="primary" onClick={() => navigate("/")}>volver a la página principal</Button>
                    </Col>
                </Row> :
                "loading"
            }
        </>
    )
}