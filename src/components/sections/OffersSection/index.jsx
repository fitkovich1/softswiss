import { cards } from "../../../data/offers";
import { OfferCard } from "../../ui/cards";

const OffersSection = () => {
	return (
		<section className="offers">
			<div className="offers__container">
				<h2 className="offers__title">Offers</h2>
				<div className="offers__cards">
					{cards.map(card => {
						const { id, title, subTitle, bcgImage } = card;
						return <OfferCard key={id} id={id} title={title} subTitle={subTitle} bcgImage={bcgImage}/>
					})}
				</div>
			</div>
		</section>
	)
}

export default OffersSection;
