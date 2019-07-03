import React from "react";
import getDataHOC from "./getDataHOC";

export function PresentationComponent({ data }) {
  console.log(`PresentationComponent: ${data}`);
  return (
    <div>
      <p>Presentation</p>
      <div>
        :<code>{JSON.stringify(data)}</code>:
      </div>
    </div>
  );
}

export default getDataHOC(PresentationComponent);
