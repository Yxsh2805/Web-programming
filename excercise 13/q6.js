export function DayToday() {
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return <h1>Today is {weekDays[new Date().getDay()]}.</h1>;
}
  