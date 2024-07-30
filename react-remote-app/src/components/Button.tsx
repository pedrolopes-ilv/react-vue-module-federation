import { useState } from "react";
import { useBearStore } from "../stores/bearStore";

interface ReactButtonProps {
  propValue?: string;
}

function ReactButton(props: ReactButtonProps) {
  const [value, setValue] = useState(0);

  const bears = useBearStore((state) => state.bears)
  const increasePopulation = useBearStore((state) => state.increase)

  const increaseValue = () => {
    setValue(value + 1);
  }

  const increaseZustandValueBy1 = () => {
    increasePopulation(1);
  }

  return (
    <div className="federated-wrapper">
      <button className="federated-button" onClick={increaseValue}>React Button Value: { value }</button>

      <span><strong>Zustand Count: </strong>{ bears }</span>

      <button className="federated-button" onClick={increaseZustandValueBy1}>Increase Zustand Value</button>

      { props.propValue && <span>Received Prop Value: {props.propValue}</span> }
    </div>
  );
}

export default ReactButton;