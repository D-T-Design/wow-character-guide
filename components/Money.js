import { Image } from "cloudinary-react";
const MoneyIcon = ({name}) => (
	<Image
		public-id={`/wow-character-guide/money-${name}.gif`}
		cloudName="david-torres-design"
		version="1623049444"
		width="13"
		height="13"
		class="money"
		loading="lazy"
		secure="true"
		alt={name}
	/>
);

export default MoneyIcon;
