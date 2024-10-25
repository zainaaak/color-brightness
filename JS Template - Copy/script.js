// Button Click Litsener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // input
  let r = document.getElementById("r-in").value;
  let g = document.getElementById("g-in").value;
  let b = document.getElementById("b-in").value;

  // process
  let brightness = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);

  // output
  document.getElementById("output").innerHTML = brightness;
}
