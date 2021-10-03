import React from "react";
import PropsTypes from "prop-types";

import { HoursBar } from "./Components/HoursBar.jsx";
import { timeBarDecorator } from "./decorators/timeBarDecorator.jsx";
import { clsx } from "./utils/index.js";
import "./index.css";

export function TimeProgressBar({
  className,
  style,
  data,
  backgroundColor,
  hourBar,
  props,
}) {
  return (
    <div className={clsx("timeProgressBar", className)} style={style}>
      <div
        {...props}
        className={clsx("timeProgressBar-root", props.className)}
        style={Object.assign({}, props.style, { backgroundColor })}
      >
        {data.map(timeBarDecorator)}
      </div>
      <div className={"timeProgressBar-timesHolder"}>
        <HoursBar hourBar={hourBar} />
      </div>
    </div>
  );
}

TimeProgressBar.defaultProps = {
  backgroundColor: "#F5F6F8",
  hourBar: "secondary",
  props: {},
};

TimeProgressBar.propTypes = {
  className: PropsTypes.string,
  style: PropsTypes.object,
  props: PropsTypes.object,
  data: PropsTypes.array,
  backgroundColor: PropsTypes.string,
  hourBar: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.element]),
};
