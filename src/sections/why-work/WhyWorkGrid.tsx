import WhyWorkCard from "./WhyWorkCard";

import { whyWorkData } from "../../data/whyWork";

function WhyWorkGrid() {
  return (
    <div
      className="
        mt-12

        grid
        grid-cols-1

        gap-6

        md:grid-cols-2

        xl:grid-cols-3
      "
    >
      {whyWorkData.map((item) => (
        <WhyWorkCard
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default WhyWorkGrid;
