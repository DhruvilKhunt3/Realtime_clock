const strips = [...document.querySelectorAll(".strip")];
const numberSize = 8;
function highlight(strip, d) {
  const numberElement = strips[strip].querySelector(
    `.number:nth-of-type(${d + 1})`
  );
  numberElement.classList.add("pop");
  setTimeout(() => {
    numberElement.classList.remove("pop");
  }, 950);
}
function stripSlider(strip, number) {
  let d1 = Math.floor(number / 10); 
  let d2 = number % 10;
 
  strips[strip].style.transform = `translateY(${d1 * -numberSize}vmin)`;
  highlight(strip, d1);
  
  strips[strip + 1].style.transform = `translateY(${d2 * -numberSize}vmin)`;
  highlight(strip + 1, d2);
}

function updateClock() {
  const time = new Date();
  
  const indiaTime = new Date(time.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

  const hours = indiaTime.getHours();
  const mins = indiaTime.getMinutes();
  const secs = indiaTime.getSeconds();
  
  stripSlider(0, hours);
  stripSlider(2, mins);
  stripSlider(4, secs);
}
setInterval(updateClock, 1000);