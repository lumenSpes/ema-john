import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
	return (
		<nav className="header">
			<img
				src={logo}
				alt="logo"
			/>
			<div>
				<a
					className="link"
					href="/shop"
				>
					Shop
				</a>
				<a
					className="link"
					href="/order"
				>
					Order
				</a>
				<a
					className="link"
					href="/inventory"
				>
					Inventory
				</a>
				<a
					className="link"
					href="/login"
				>
					Login
				</a>
			</div>
		</nav>
	);
};

export default Header;
