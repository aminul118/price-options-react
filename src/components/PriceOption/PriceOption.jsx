import PropTypes from "prop-types";
import Features from "../Features/Features";

export default function PriceOption({ option }) {
  const { name, price, features } = option;
  return (
    <div className="bg-slate-800 text-white p-8 rounded-lg space-y-3 flex flex-col">
      <h2 className="text-center ">
        <span className="text-5xl font-bold ">{price}</span>
        <span className="text-sm ">/month</span>
      </h2>
      <h4 className="text-xl text-center ">{name}</h4>
      <div className="pl-6 grow ">
        {features.map((feature, i) => (
          <Features key={i} feature={feature}></Features>
        ))}
      </div>
      <button className="bg-blue-500 w-full py-2 rounded-lg ">
        Button
      </button>
    </div>
  );
}
PriceOption.propTypes = {
  option: PropTypes.object,
};
