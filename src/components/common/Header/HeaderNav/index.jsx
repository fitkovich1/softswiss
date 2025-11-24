import { navMenu } from "../../../../data/menu";



const HeaderNav = ({ mobile = false }) => {
	return (
		<nav className={`header__nav ${mobile ? 'header__nav--mobile' : ''}`}>
			<ul className="header__menu">
				{navMenu.map((item) => {
					const { id, href, children, ariaLabel } = item;
					return <li key={id} className="header__menu-item" aria-label={ariaLabel}>
						<a href={href} className="header__menu-link">{children}</a>
					</li>
				})}
			</ul>
		</nav>
	);
};

export default HeaderNav;
