import React, { useState } from 'react';
import { BurgerIcon, CloseIcon } from "../../../ui/icons";
import HeaderNav from "../HeaderNav";

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	
	return (
		<>
			<div className="burger">
				{isOpen ? (
					<CloseIcon
						className="burger__icon burger__icon--close"
						onClick={() => setIsOpen(false)}
					/>
				) : (
					<BurgerIcon
						className="burger__icon burger__icon--open"
						onClick={() => setIsOpen(true)}
					/>
				)}
			</div>
			
			<div className={`burger-menu ${isOpen ? 'burger-menu--active' : ''}`}>
				<HeaderNav mobile />
			</div>
		</>
	);
};

export default BurgerMenu;
