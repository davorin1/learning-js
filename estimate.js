

(function() {
  "use strict";

  var state = document.getElementById('state');

  document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('shopping-form').addEventListener('change', estimateTotal);

    var btnEstimate = document.getElementById('estimate-total');

    btnEstimate.disabled = true;

    state.addEventListener('change', function() {
      if(state.value === '') {
        btnEstimate.disabled = true;
      } else {
        btnEstimate.disabled = false;
      }
    });


  });


  function estimateTotal(event) {
    event.preventDefault();

  if(state.value === '') {
    alert('Please choose your shipping state.');
    state.focus();
  }

  var sneakersQt = parseInt(document.getElementById('sneakers-qt').value),
      jerseyQt = parseInt(document.getElementById('jersey-qt').value),
      suppsQt = parseInt(document.getElementById('supps-qt').value),
      shippingState = state.value,
      shippingMethod = document.querySelector('[name=r_method]:checked').value;

  var totalQty = sneakersQt + jerseyQt + suppsQt,
      shippingCostPer,
      taxFactor,
      shippingCostTotal,
      estimate;

  var  sneakersPrice = 90,
       jerseyPrice = 25,
       suppsPrice = 30,
       taxCA = 1.075,
       taxNY = 1.05,
       taxWA = 1.02;

  estimate = (sneakersPrice * sneakersQt) + (jerseyPrice*jerseyQt) + (suppsPrice*suppsQt);

  if(state.value == "CA") {
    taxFactor = taxCA;
  } else if (state.value="NY") {
    taxFactor = taxNY;
  } else if (state.value="WA") {
    taxFactor = taxWA;
  }

  if(shippingMethod == "usmail") {
    shippingCostPer = 2;
  } else if (shippingMethod == "ups") {
    shippingCostPer = 3;
  } else {
    shippingCostPer = 0;
  }

  shippingCostTotal = shippingCostPer * totalQty;

  estimate = (estimate * taxFactor) + shippingCostTotal;

  var result = document.getElementById('estimate-result');
  result.innerHTML = '$' + estimate;

  console.log(estimate)

  }

}) ();
