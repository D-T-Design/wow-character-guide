import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../utils/cloudinary";
const MoneyIcon = ({ name }) => (
  <AdvancedImage
    cldImg={cld.image(`money-${name}.gif`).width(13).height(13).secure(true)}
    class="money"
    loading="lazy"
    alt={name}
  />
);

export default MoneyIcon;
