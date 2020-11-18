let date = new Date();
console.log(date);
let year = date.getFullYear();
console.log(year);
let month = date.getMonth() + 1;
console.log(month);
let day = date.getDate();
console.log(day);
let x = (year + "/" + month + "/" + day);
console.log(x);
window.onload = function(){
  var spanText = document.getElementById('spanText')
  console.log(spanText);
  console.log(spanText.textContent);
  spanText.innerHTML = (x);
};