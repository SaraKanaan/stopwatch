let Second = 00;
let Tens = 00;
let minuts = 00;
let Interval;

// Get ALL Dom Data
let getSecond = document.querySelector(".seconed"),
  getTens = document.querySelector(".tens"),
  getMinuts = document.querySelector(".minuts"),
  getStartBtn = document.querySelector(".start-btn"),
  getStopBtn = document.querySelector(".stop-btn"),
  getResetBtn = document.querySelector(".reset-btn");

getStartBtn.addEventListener("click", () => {
  Interval = setInterval(startTime, 10);
});

getStopBtn.addEventListener("click", () => {
  clearInterval(Interval);
});

getResetBtn.addEventListener("click", () => {
  clearInterval(Interval);
  minuts = "00";
  Second = "00";
  Tens = "00";
  getMinuts.innerHTML = minuts;
  getSecond.innerHTML = Second;
  getTens.innerHTML = Tens;
});

// Main Function to Start Stopwatch
function startTime() {
  //check of tens less than 99 so print in Tens
  Tens++;
  if (Tens <= 9) {
    getTens.innerHTML = `0${Tens}`;
  }

  if (Tens > 9) {
    getTens.innerHTML = `${Tens}`;
  }

  //check of second
  checkSecond();
}

function checkSecond() {
  if (Tens > 99) {
    if (Second <= 9) {
      Tens = 0;
      Second++;
      getTens.innerHTML = `00`;
      getSecond.innerHTML = `0${Second}`;
    }
    if (Second > 9) {
      Tens = 0;
      Second++;
      getTens.innerHTML = `00`;
      getSecond.innerHTML = `${Second}`;
    }
    if (Second >= 60) {
      checkMinuts();
    }
  }
}

function checkMinuts() {
  if (minuts <= 9) {
    Tens = 0;
    Second = 0;
    minuts++;
    getTens.innerHTML = `00`;
    getSecond.innerHTML = `00`;
    getMinuts.innerHTML = `0${minuts}`;
  }
  if (minuts > 9) {
    Tens = 0;
    Second = 0;
    minuts++;
    getTens.innerHTML = `00`;
    getSecond.innerHTML = `00`;
    getMinuts.innerHTML = `${minuts}`;
  }
}
