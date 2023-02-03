const investmentButton = document.querySelector("#investment");

investmentButton.addEventListener("click", investmentButtonClick, false);

async function investmentButtonClick(event) {
  const invest = document.querySelector("#invest").value;
  const data = {
    investment: invest
  }
  const response = await fetch("/user/investment", {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  console.log(result);
}
