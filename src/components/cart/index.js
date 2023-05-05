import { useContext } from 'react';
import { Table, Button } from 'react-bootstrap';
import Context from '../../context';

export default function Cart() {
    const { cart, setCart } = useContext(Context);

    const removeFromCart = (id) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === id);
    if (index !== -1) {
        newCart.splice(index, 1);
        setCart(newCart);
        }
    };

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const renderTable = () => {
        if (cart.length === 0) {
        return <p>No hay pizzas en el carrito</p>;
        }

    const uniquePizzas = Array.from(new Set(cart.map((item) => item.id)));

    return (
        <div className='my-4 mx-5 text-center'>
        <Table>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio unitario</th>
                <th>Precio total</th>
                <th>Agregar o quitar</th>
            </tr>
            </thead>
            <tbody>
            {uniquePizzas.map((id) => {
                const item = cart.find((item) => item.id === id);
                const quantity = cart.filter((item) => item.id === id).length;
                const totalPrice = quantity * item.precio;

            return (
                <tr key={item.id}>
                    <td>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>{item.name.charAt(0).toUpperCase() + item.name.substring(1)}</div>
                        <div><img src={item.image} alt={item.name} width="50" height="50" /></div>
                        </div>
                    </td>
                    <td>{quantity}</td>
                    <td>${item.precio}</td>
                    <td>${totalPrice}</td>
                    <td>
                    <Button variant="success" size="sm" onClick={() => addToCart(item)}>
                    +
                    </Button>{' '}
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                    -
                    </Button>
                    </td>
                </tr>
                );
            })}
        </tbody>
        <tfoot  className='text-center'>
            <tr>
                <td>Total:</td>
                <td></td>
                <td></td>
                <td>${getTotalPrice()}</td>
                <td></td>
            </tr>
        </tfoot>
        </Table>
        </div>
        );
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.precio, 0);
    };

    return (
        <div className="cart my-5 mx-5">
        <h2>Detalle de compra</h2>
        {renderTable()}
        </div>
    );
}