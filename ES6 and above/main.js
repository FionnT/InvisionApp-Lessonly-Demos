const count = document.getElementById("counter");
const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() {
  let current_number = parseInt(count.innerHTML);
  current_number
    ? (count.innerHTML = current_number + 1)
    : (count.innerHTML = 1);
});
