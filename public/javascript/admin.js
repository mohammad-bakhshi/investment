const createButton = document.querySelector("#createCompany");

createButton.addEventListener("click", createButtonClick, false);

async function createButtonClick(event) {
  const symbol = document.querySelector("#symbol").value;
  const value = document.querySelector("#value").value;
  const profit = document.querySelector("#profit").value;
  const data = {
    symbol,
    value,
    profit
  }
  const response = await fetch("/company", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  console.log(result);
}
