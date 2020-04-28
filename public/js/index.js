let counter = 0;

function setAttributes(el, options) {
  Object.keys(options).forEach(attr => {
    el.setAttribute(attr, options[attr]);
  });
}

function onSignUp() {
  // counter is to avoid spamming input elements
  if (counter === 0) {
    const password = document.getElementById('password');
    const firstName = document.createElement('input');
    const lastName = document.createElement('input');

    const signBttn = document.getElementById('signBttn');

    const signin = document.getElementById('signin');
    const signup = document.getElementById('signup');

    signin.removeAttribute('class');
    signup.setAttribute('class', 'table--active');

    setAttributes(firstName, {
      id: 'firstName',
      type: 'text',
      name: 'firstName',
      placeholder: 'first name',
      required: true,
    });

    setAttributes(lastName, {
      id: 'lastName',
      type: 'text',
      name: 'lastName',
      placeholder: 'last name',
      required: true,
    });

    signBttn.textContent = 'sign up';

    $(firstName)
      .insertAfter(password)
      .hide()
      .show(400);

    $(lastName)
      .insertAfter(firstName)
      .hide()
      .show(600);

    // password.parentNode.insertBefore(firstName, password.nextSibling);
    // firstName.parentNode.insertBefore(lastName, firstName.nextSibling);
    counter++;
  }
}

function onSignIn() {
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const signBttn = document.getElementById('signBttn');

  const signin = document.getElementById('signin');
  const signup = document.getElementById('signup');

  signin.setAttribute('class', 'table--active');
  signup.removeAttribute('class');

  signBttn.textContent = 'sign in';

  if (firstName !== null) {
    $(firstName).remove();
    $(lastName).remove();
    counter = 0;
  }
}
