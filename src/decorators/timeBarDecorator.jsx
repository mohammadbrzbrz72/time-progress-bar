import React from "react";

import { TimeBar } from "../Components/TimeBar.jsx";
import { ComputebarLeftPosition, ComputebarLength } from "../utils/index.js";

export function timeBarDecorator({ start, end, key, ...allProps }, i) {
  const barLeftPosition = ComputebarLeftPosition(start);
  const barLength = ComputebarLength(barLeftPosition, end);

  return (
    <TimeBar
      key={key ? key : i + "time_bar"}
      barLeftPosition={barLeftPosition}
      barLength={barLength}
      {...allProps}
    />
  );
}
