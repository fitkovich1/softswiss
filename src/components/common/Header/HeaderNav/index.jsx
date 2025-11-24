import { navMenu } from "../../../../data/menu";



const HeaderNav = ({ mobile = false }) => {
	return (
		<nav className={`header__nav ${mobile ? 'header__nav--mobile' : ''}`}>
			<ul className="header__menu">
				{navMenu.map((item) => (
					<li key={item.id} className="header__menu-item">
						<a href={item.href} className="header__menu-link">{item.children}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default HeaderNav;
