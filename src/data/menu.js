import { CartIcon } from "../components/ui/icons";

export const navMenu = [
	{id: 0, href: "#home", children: "Home"},
	{id: 1, href: "#products", children: "Products"},
	{id: 2, href: "#cart", children: <CartIcon className="header__menu-link-icon"/>},
];
