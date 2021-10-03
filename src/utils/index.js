const secondsOfTheDays = 86400; // 24h * 60m * 60s
const widthByPercent = 100;

export const convertSecondProportionalToThePercent = (seconds) =>
  (seconds / secondsOfTheDays) * widthByPercent;

export const beValidateTime = (time) =>
  !time || typeof time === "boolean" ? "00:00:00" : time;

export const computeTimesSecond = (time) =>
  time
    .split(":")
    .map((data) => Number(data))
    .reduce((total, current) => total * 60 + current);

export const ComputebarLeftPosition = (start) => {
  const START_AT = beValidateTime(start);
  const totalStartSeconds = computeTimesSecond(START_AT);

  return convertSecondProportionalToThePercent(totalStartSeconds);
};

export const ComputebarLength = (barLeftPosition, end) => {
  const END_AT = beValidateTime(end);
  const totalEndSeconds = computeTimesSecond(END_AT);

  return end
    ? convertSecondProportionalToThePercent(totalEndSeconds) - barLeftPosition
    : totalEndSeconds + barLeftPosition;
};

export const clsx = (...clss) => clss.filter(Boolean).join(" ");
