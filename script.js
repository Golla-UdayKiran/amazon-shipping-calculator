function handleCostKeydownUSD(event) {
  if (event.key === 'Enter') {
    calculateTotalUSD();
  }
}

/*
 * Issue = the calculation is inaccurate.
 * Fix = calculate the number in cents and then
 *       convert back to dollars at the end.
 *  
 */
function calculateTotalUSD() {
  const inputElement = document.querySelector('.js-cost-input-usd');

  // Convert the numbers to cents by * 100.
  let cost = Number(inputElement.value) * 100;

  if (cost < 4000) {
    cost = cost + 1000;
  }

  // Convert back to dollars at the end.
  document.querySelector('.js-total-cost-usd')
    .innerHTML = `$${cost / 100}`;
}

function handleCostKeydownINR(event) {
  if (event.key === 'Enter') {
    calculateTotalINR();
  }
}

/*
 * Issue = the calculation is inaccurate.
 * Fix = calculate the number in paise and then
 *       convert back to rupees at the end. 
*/
function calculateTotalINR() {
  const inputElement = document.querySelector('.js-cost-input-inr');

  // Convert the numbers to paise by * 100.
  let cost = Number(inputElement.value) * 100;

  if (cost < 350520) {
    cost = cost + 87630;
  }

  // Convert back to rupees at the end.
  document.querySelector('.js-total-cost-inr')
    .innerHTML = `₹${cost / 100}`;
}