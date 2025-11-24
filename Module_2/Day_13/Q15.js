let seconds = Number(prompt("Enter countdown seconds:"));
let stopFlag = false;

const keyCheck = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "s") stopFlag = true;
  });
};

setTimeout(keyCheck, 0);

const timer = setInterval(() => {
  if (stopFlag) {
    clearInterval(timer);
    console.log("Countdown Stopped!");
    return;
  }
  console.log(seconds);
  seconds--;
  if (seconds < 0) {
    clearInterval(timer);
    console.log("Countdown Complete!");
  }
}, 1000);
