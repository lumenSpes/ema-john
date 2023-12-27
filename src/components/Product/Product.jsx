import "./Product.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
	const { name, img, price, ratings, seller } = props.product;
	const handelAddToCart = props.handelAddToCart;
	return (
		<div className="card">
			<img
				className="product-img"
				src={img}
				alt="shoe"
			/>
			<div className="product-info">
				<h6 className="product-title">{name}</h6>
				<p className="product-price">Price: ${price}</p>
				<p className="product-seller">Seller: {seller}</p>
				<p className="product-rating">Ratings: {ratings}</p>
			</div>
			<button
				onClick={() => handelAddToCart(props.product)}
				className="cart-btn"
			>
				Add to Cart
				<FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
			</button>
		</div>
	);
};

Product.propTypes = {
	product: PropTypes.shape({
		name: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		ratings: PropTypes.number.isRequired,
		seller: PropTypes.string.isRequired,
		stock: PropTypes.number.isRequired,
	}).isRequired,
	handelAddToCart: PropTypes.func.isRequired,
};

export default Product;
