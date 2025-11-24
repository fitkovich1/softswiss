import { SpaceLogo } from "../../ui/icons";
import HeaderNav from "./HeaderNav";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<SpaceLogo /> {/* Need to use an element like a Link, but we have only one page*/}
				<HeaderNav />
				<BurgerMenu />
			</div>
		</header>
	)
}

export default Header;
