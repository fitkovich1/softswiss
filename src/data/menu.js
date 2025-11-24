import { CartIcon } from "../components/ui/icons";

export const navMenu = [
	{id: 0, href: "#home", children: "Home", ariaLabel: "Home"},
	{id: 1, href: "#products", children: "Products", ariaLabel: "Products"},
	{id: 2, href: "#cart", children: <CartIcon className="header__menu-link-icon"/>, ariaLabel: "Shopping cart"},
];
