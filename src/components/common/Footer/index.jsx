const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<img
					src={`${process.env.PUBLIC_URL}/images/optimized/rocket.webp`}
					loading="lazy"
					decoding="async"
					alt="Rocket"
				/>
				<p className="footer__text">Exciting space adventure!</p>
			</div>
		</footer>
	)
}

export default Footer;
