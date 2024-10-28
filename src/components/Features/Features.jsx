import PropTypes from "prop-types";
import { LuCheckCircle } from "react-icons/lu";
export default function Features({ feature }) {
  return (
    <div>
    
        <p className="flex items-center gap-2">
          <LuCheckCircle /> {feature}
        </p>
      </div>
   
  );
}

Features.propTypes = {
  feature: PropTypes.object,
};
