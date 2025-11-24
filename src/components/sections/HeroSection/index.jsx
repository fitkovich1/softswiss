import { Button } from "../../ui/buttons";

const HeroSection = () => {
	return (
		<section className="hero">
			<div className="hero__container">
				<div className="hero__info">
					<h1 className="hero__title">
						Discover the vast <br/> expanses of <span>space</span>
					</h1>
					<p className="hero__subtitle">
						Where the possibilities are <span>endless!</span>
					</p>
					<Button variant="primary">
						Learn more
					</Button>
				</div>
			</div>
			
		</section>
	)
}

export default HeroSection;
