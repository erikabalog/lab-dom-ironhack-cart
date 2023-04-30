// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price= product.querySelector(`.price span`);
  //price.style.border= "1px solid red";

  //console.log(`price` , price)
  const quantity = product.querySelector(`.quantity input`).value;
  //console.log(`input quantity`, quantity);
  //quantity.style.border= "1px solid blue";

  const priceValue= price.innerHTML;
  //console.log(`quantity value`, quantity);

  const result = priceValue * quantity;
  //console.log(`result`, result);

  const total= product.querySelector(`.subtotal span`);
  //console.log(`total`, total)
  //console.log(total.innerHTML)

  total.innerHTML = result;

}

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //  const title= document.querySelector(`#cart`);
  const products = document.querySelectorAll('.product');
  
  let total = 0;
  products.forEach( function(element) {
    updateSubtotal(element);
    total += updateSubtotal(element);
    // code to be executed for each element
    //  updateSubtotal(table);
  });
  document.querySelectorAll(`#total - value span`).innerHTML = total;
  // end of test

  // ITERATION 2
  //... your code goes here
  
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
 const target = event.currentTarget;
 console.log('The target in remove is:', target);
  //... your code goes here

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
