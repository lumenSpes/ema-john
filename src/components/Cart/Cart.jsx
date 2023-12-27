import PropTypes from "prop-types";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
	const { cart } = props;
    console.log(cart);
	let totalPrice = 0;
	let shipping = 0;
	let quantity = 0;
	for (const product of cart) {
		totalPrice = totalPrice + product.price * product.quantity;
		shipping = shipping + product.shipping;
		quantity = quantity + product.quantity;
	}

    const tax = totalPrice * 5 / 100;
    const grandTotal = totalPrice + shipping + tax;
	return (
		<div className="cart">
			<h3 className="order-summary">Order Summary</h3>
			<div className="order-details">
				<p>Selected Items: {cart.length}</p>
				<p>Total Price: ${totalPrice}</p>
				<p>Total Shipping: ${shipping}</p>
				<p>Tax: ${tax.toFixed(2)}</p>
				<p>Grand Total: ${grandTotal.toFixed(2)}</p>
				<button className="order-clear">
					Clear Cart
					<FontAwesomeIcon
						className="icon"
						icon={faTrash}
					></FontAwesomeIcon>
				</button>
				<button className="order-review">
					Clear Cart
					<FontAwesomeIcon
						className="icon"
						icon={faArrowRight}
					></FontAwesomeIcon>
				</button>
			</div>
		</div>
	);
};

Cart.propTypes = {
	cart: PropTypes.array.isRequired,
};

export default Cart;
