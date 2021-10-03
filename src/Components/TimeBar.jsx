import React from "react";
import PropsTypes from "prop-types";

import { clsx } from "../utils/index.js";

export function TimeBar({
  barLength,
  barLeftPosition,
  color,
  children,
  className,
  style,
  props,
}) {
  return (
    <div
      style={{
        ...style,
        width: `${barLength}%`,
        left: `${barLeftPosition}%`,
        backgroundColor: color,
      }}
      className={clsx("timeProgressBar-timebar", className)}
      {...props}
    >
      {!!children && <div className="timebar-box">{children}</div>}
    </div>
  );
}

TimeBar.defaultProps = {
  color: "#20CF7E",
  props: {},
  style: {},
};

TimeBar.propsTypes = {
  barLength: PropsTypes.number.isRequired,
  barLeftPosition: PropsTypes.number.isRequired,
  color: PropsTypes.string,
  children: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.element]),
  className: PropsTypes.string,
  props: PropsTypes.object,
};
