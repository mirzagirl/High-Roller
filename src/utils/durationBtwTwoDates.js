const moment = require("moment");

export function getTimeDifference(date1) {
  const date = moment(date1);
  const currentDate = moment();
  const difference = moment.duration(currentDate.diff(date));

  const days = Math.floor(difference.asDays());
  const hours = difference.hours();
  const minutes = difference.minutes();
  let duration = "";

  if (days) duration += `${days} days`;
  if (hours) duration += ` ${hours} hr`;
  if (minutes) duration += ` ${minutes} min`;
  if (!duration) {
    duration = "0 days 0 hr";
  }

  return duration;
}
