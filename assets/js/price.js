var priceInput = document.getElementById("input-price")

var previousValue = "0"
document.getElementById("input-free").addEventListener("change", function(e) {
  if(e.srcElement.checked) {
    previousValue = priceInput.value
    priceInput.value = "0"
    priceInput.disabled = true
  } else {
    priceInput.disabled = false
    priceInput.value = previousValue
  }
})
