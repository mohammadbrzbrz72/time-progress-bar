import React from "react";

export function HoursBar({ hourBar }) {
  switch (hourBar) {
    case "primary":
      return <span className="time-item">12 pm</span>;

    case "secondary":
      return (
        <>
          <span className="time-item">6 am</span>
          <span className="time-item">12 pm</span>
          <span className="time-item">6 pm</span>
        </>
      );

    case "tertiary":
      return (
        <>
          <span className="time-item">4am</span>
          <span className="time-item">8 am</span>
          <span className="time-item">12 pm</span>
          <span className="time-item">4 pm</span>
          <span className="time-item">8 pm</span>
        </>
      );

    default:
      return hourBar ? hourBar : "";
  }
}
