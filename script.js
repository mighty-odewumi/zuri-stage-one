function updateTime() {

  const day = document.getElementById("day-of-week");
  const timeOutput = document.getElementById("time");

  const time = new Date();

  const newTime = time.getTime();
  // console.log(newTime);
  timeOutput.innerHTML = newTime;

  const utcTime = time.toDateString();
  const splitUTCTimeForDay = utcTime.split(" ");
  // console.log(splitUTCTimeForDay);

  const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  daysArray.map(eachDay => {
    if (eachDay.includes(splitUTCTimeForDay[0])) {
      
      day.innerHTML = eachDay;
      // console.log(eachDay);
    }
  });
}

const checkInterval = setInterval("updateTime()", 1000);
