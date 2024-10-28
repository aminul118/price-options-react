import PriceOption from "../PriceOption/PriceOption";


export default function PriceOptions() {
    const priceOptions = [
      {
        id: 1,
        name: "Basic Membership",
        price: 30,
        features: [
          "Access to gym equipment",
          "Locker room access",
          "Free Wi-Fi",
        ],
      },
      {
        id: 2,
        name: "Premium Membership",
        price: 60,
        features: [
          "Access to all equipment",
          "Locker room access",
          "Free Wi-Fi",
          "Group fitness classes",
          "Sauna",
        ],
      },
      {
        id: 3,
        name: "Personal Training Package",
        price: 100,
        features: [
          "One-on-one training sessions",
          "Personalized workout plan",
          "Access to all gym areas",
          "Nutritional guidance",
        ],
      },
      {
        id: 4,
        name: "Yoga Class Pass",
        price: 25,
        features: [
          "Access to yoga classes",
          "Locker room access",
          "Free water bottle",
          "Beginner and advanced sessions",
        ],
      },
      {
        id: 5,
        name: "Family Membership",
        price: 90,
        features: [
          "Access for 4 family members",
          "All gym amenities",
          "Family fitness classes",
          "Free guest passes",
        ],
      },
    ];

  return (
    <div>
      <h2 className="text-center text-3xl mt-4 font-semibold py-4">Best Price in Town : {priceOptions.length}</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 p-4 gap-4">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
}
