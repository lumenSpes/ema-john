import { useEffect, useState } from "react";
import "./Shop.css";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const handelAddToCart = (product) => {
		let newCart = [];

		const exists = cart.find(pd => pd.id == product.id);
		if(!exists){
			product.quantity = product.quantity + 1;
			newCart = [...cart, product];
		} else {
			exists.quantity = exists.quantity + 1;
			const remaining = cart.filter(pd => pd.id !== product.id);
			newCart = [...remaining, exists];
		}

		setCart(newCart);
		addToDb(product.id);
	};

	useEffect(()=>{
		const storedCart = getShoppingCart();
		const savedCart = [];
		for(const id in storedCart){
			const addedProduct = products.find(product => product.id === id);
			if(addedProduct){
				const quantity = storedCart[id];
				addedProduct.quantity = quantity;
				savedCart.push(addedProduct);
			}
		}
		setCart(savedCart);
	},[products])

	return (
		<div className="shop-container">
			<div className="products-container">
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						handelAddToCart={handelAddToCart}
					></Product>
				))}
			</div>
			<div className="order-container">
				<Cart 
					cart={cart}
				></Cart>
			</div>
		</div>
	);
};

export default Shop;
