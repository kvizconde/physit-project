/*
----------------------------------------------------------------------------------

README: The Following JS file Has Been Created by RINGO SUEN

• Appending exercises to the cart container
• Removing exercises to the cart container
• Handling duplicates of exercises added to the cart container

Original and Final Revision/Design: Ringo Suen

----------------------------------------------------------------------------------
*/

$('#preloader')
  .css('visibility', 'visible')
  .hide()
  .fadeIn(666);

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  const removeExerciseItemButton = document.getElementsByClassName('btn-remove');

  for (var i = 0; i < removeExerciseItemButton.length; i++) {
    var button = removeExerciseItemButton[i];

    button.addEventListener('click', removeExerciseItem);
  }

  const addToCartButtons = document.getElementsByClassName('add-exercise-btn');

  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];

    button.addEventListener('click', addExerciseClicked);
  }

  document.getElementsByClassName('btn-send')[0].addEventListener('click', sendToPatientClicked);
}

function sendToPatientClicked() {
  alert('Sending to Patient');
  const cartItems = document.getElementsByClassName('cart-items')[0];

  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
}

function removeExerciseItem(event) {
  const buttonClicked = event.target;

  buttonClicked.parentElement.parentElement.remove();
}

function quantityChanged(event) {
  const input = event.target;

  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
}

function addExerciseClicked(event) {
  const button = event.target;
  const shopItem = button.parentElement.parentElement;

  const exerciseID = shopItem.getElementsByClassName('single-exerciseID')[0].value;
  const title = shopItem.getElementsByClassName('single-exercise-title')[0].innerText;
  const equipment = shopItem.getElementsByClassName('single-exercise-equipment')[0].innerText;
  const imageSrc = shopItem.getElementsByClassName('single-exercise-image')[0].src;

  addExerciseToCart(exerciseID, title, equipment, imageSrc);
}

function addExerciseToCart(exerciseID, title, equipment, imageSrc) {
  const cartRow = document.createElement('div');

  cartRow.classList.add('cart-row');
  const cartItems = document.getElementsByClassName('cart-items')[0];
  const cartItemNames = cartItems.getElementsByClassName('cart-item-title');

  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert('Exercise Already Added');
      return;
    }
  }
  const cartRowContents = `
      <div class="cart-item cart-column">
        <span class="cart-item-title">${title}</span>
        <input type="hidden" value="${title}" name="title"/>
        <input type="hidden" value="${exerciseID}" name="exerciseID"/>
        </div>
        <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" name="reps" type="number" value="10">
        </div>
        <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" name="sets" type="number" value="3">
        </div>
        <div class="cart-quantity cart-column">
        <button class="btn btn-remove" type="button">x</button>
      </div>
    `;

  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeExerciseItem);
  cartRow
    .getElementsByClassName('cart-quantity-input')[0]
    .addEventListener('change', quantityChanged);
}
