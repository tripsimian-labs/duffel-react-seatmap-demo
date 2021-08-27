import "./styles.css";

import { SeatSelection } from "@duffel/components";
import { offer, seatMaps, passengers } from "./mockapi";

console.log({ offer, seatMaps, passengers });

const onSubmitFn = (e) => {
  alert(JSON.stringify(e));
  console.log(e);
};

export default function App() {
  return (
    <div>
      <h1>Duffel Components: Seat Selection</h1>
      <p>
        <a href="https://duffel.com/blog/duffel-components-seat-selection">
          Overview
        </a>
      </p>
      <SeatSelection
        offer={offer}
        seatMaps={seatMaps}
        passengers={passengers}
        onSubmit={onSubmitFn}
      />
    </div>
  );
}
