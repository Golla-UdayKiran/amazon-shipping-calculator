function handleCostKeydownUSD(event) {
  if (event.key === 'Enter') {
    calculateTotalUSD();
  }
}

function calculateTotalUSD() {
  const inputElement = document.querySelector('.js-cost-input-usd');
  let cost = Number(inputElement.value);

  if (cost < 40) {
    cost = cost + 10;
  }

  document.querySelector('.js-total-cost-usd')
    .innerHTML = `$${cost}`;
}

function handleCostKeydownINR(event) {
  if (event.key === 'Enter') {
    calculateTotalINR();
  }
}

function calculateTotalINR() {
  const inputElement = document.querySelector('.js-cost-input-inr');
  let cost = Number(inputElement.value);

  if (cost < 3505.20) {
    cost = cost + 876.30;
  }

  document.querySelector('.js-total-cost-inr')
    .innerHTML = `$${cost}`;
}