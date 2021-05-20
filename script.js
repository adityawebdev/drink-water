document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form").addEventListener("submit", handleForm);
});

function handleForm(e) {
  e.preventDefault(); //Stop page reloading

  let form = e.target;
  let fd = new FormData(form);

  let inputs = [];
  for (let key of fd.keys()) {
    inputs.push(fd.get(key));
  }
  const weight = inputs[0];
  const option = inputs[1];
  //   console.log(weight);
  //   console.log(option);

  const w_a_w = weight / 25;

  let total_water = w_a_w;

  if (option == 1) {
    total_water = total_water;
  } else if (option == 2) {
    total_water = total_water + 0.35;
  } else if (option == 3) {
    total_water = total_water + 0.65;
  } else if (option == 4) {
    total_water = total_water + 0.9;
  } else {
    console.log("nothing is selected");
  }
  console.log(total_water);
  const glass = Math.ceil(total_water * 3);
  document.getElementById(
    "result"
  ).innerHTML = `You should drink ${total_water} litres or ${glass} glasses of water daily.`;
}
