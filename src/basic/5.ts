enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek) => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    return `${day} its a dayoff.`;
  } else return `${day} its a workday.`;
};
