import { Button } from "../../buttons";

const OfferCard = ( { id, title, subTitle, bcgImage, ...props } ) => {
	/*const navigate = useNavigate(); // To be used in the future, once a Router has been implemented */
	return (
		<div className="offers__cards-item" key={id} style={{
			background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%), url('/images/optimized/${bcgImage}') center/cover`
		}} {...props}>
			<div className="offers__cards-item__text">
				<h3 className="offers__cards-item__title">{title}</h3>
				<p className="offers__cards-item__subtitle">{subTitle}</p>
			</div>
			<Button variant="secondary" onClick={() => { /*return navigate(`/offers/${id}`)*/ }}>
				{/* To be used in the future, once a Router has been implemented*/}
				Learn more
			</Button>
		</div>
	);
};

export default OfferCard;
