const priceAmount = document.getElementById('price');
const peopleAmount = document.getElementById('people');
const tipAmount = document.getElementById('tip');
const btn = document.querySelector('.count');
const spanCost = document.querySelector('.cost');
const info = document.querySelector('.cost-info');
const error = document.querySelector('.error');

const count = () => {
   if (priceAmount.value === '' || peopleAmount.value === '' || tipAmount.value === '0') {
      error.textContent = "Please fill all forms";
      info.style.display = "none";
   } else {
      error.textContent = "";
      const price = parseFloat(priceAmount.value);
      const people = parseInt(peopleAmount.value);
      const tip = parseFloat(tipAmount.value);
      let myShare = ((price + price * tip) / people).toFixed(2);
      spanCost.textContent = myShare + ' ';
      info.style.display = "inline";
      
   }
}

btn.addEventListener('click', count)