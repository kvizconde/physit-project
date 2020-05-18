// TODO: IF NEEDED
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  var removeExerciseItemButton = document.getElementsByClassName('btn-remove')
  for (var i = 0; i < removeExerciseItemButton.length; i++) {
    var button = removeExerciseItemButton[i]
    button.addEventListener('click', removeExerciseItem)
  }

  var addToCartButtons = document.getElementsByClassName('add-exercise-btn')
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addExerciseClicked)
  }

  document.getElementsByClassName('btn-send')[0].addEventListener('click', sendToPatientClicked)
}

function sendToPatientClicked() {
    alert('Sending to Patient')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
}

function removeExerciseItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
}

function addExerciseClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('single-exercise-title')[0].innerText
    var equipment = shopItem.getElementsByClassName('single-exercise-equipment')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('single-exercise-image')[0].src
    addExerciseToCart(title, equipment, imageSrc)
}

function addExerciseToCart(title, equipment, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Exercise Already Added')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-equipment cart-column">${equipment}</span>
        <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="6">
        </div>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
        </div>
        <div class="cart-quantity cart-column">
        <button class="btn btn-remove" type="button">REMOVE</button>
        </div>`
      
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeExerciseItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}