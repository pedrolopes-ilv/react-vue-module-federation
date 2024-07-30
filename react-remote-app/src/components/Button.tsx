import { useState } from "react";

function ReactButton() {
  const [value, setValue] = useState(0);

  const increaseValue = () => {
    setValue(value + 1);
  }

  return (
    <>
      <button className="federated-button" onClick={increaseValue}>React Button Value: { value }</button>
    </>
  );
}

export default ReactButton;