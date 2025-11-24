const CloseIcon = ( { className = "", ...props } ) => {
	return <svg className={`icon ${className}`} width="33" height="38" viewBox="0 0 33 38" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<g filter="url(#filter0_d_80_34)">
			<line x1="4.59457" y1="27.1958" x2="27.5946" y2="10.1958" stroke="white" strokeWidth="2"/>
			<line x1="27.6179" y1="26.8209" x2="4.6179" y2="10.8209" stroke="white" strokeWidth="2"/>
		</g>
		<defs>
			<filter id="filter0_d_80_34" x="0" y="9.39166" width="32.189" height="26.6083" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
				<feFlood floodOpacity="0" result="BackgroundImageFix"/>
				<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
				<feOffset dy="4"/>
				<feGaussianBlur stdDeviation="2"/>
				<feComposite in2="hardAlpha" operator="out"/>
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
				<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_80_34"/>
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_80_34" result="shape"/>
			</filter>
		</defs>
	</svg>
};

export default CloseIcon;
