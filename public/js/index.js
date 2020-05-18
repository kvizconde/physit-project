/*
----------------------------------------------------------------------------------

README: The Following JS file Has Been Created by KEVIN VIZCONDE

• Setup function for sign up button.
  Displays first name and last name if sign up button was clicked.
  Also animations were added to the name fields.

• Particle JS was added and modified/tweaked

Original and Final Revision/Design: Kevin Vizconde

----------------------------------------------------------------------------------
*/

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

    window.setTimeout(() => {
      $(signBttn)
        .text('sign up')
        .fadeIn();
    }, 500);

    $(firstName)
      .insertAfter(password)
      .hide()
      .show(400);

    $(lastName)
      .insertAfter(firstName)
      .hide()
      .show(700);

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

// //////////////////////////////////
// ////// START OF PARTICLE JS //////
// //////////////////////////////////

particlesJS('particles-js', {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 750 } },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 1, color: '#ffffff' },
      polygon: { nb_sides: 5 },
      image: { src: 'img/github.svg', width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: { value: 3, random: true, anim: { enable: false, speed: 0, size_min: 0.1, sync: false } },
    line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.25, width: 1.5 },
    move: {
      enable: true,
      speed: 0.75,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'bounce',
      bounce: false,
      attract: { enable: false, rotateX: 780, rotateY: 1420.4657549380909 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: false, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: { distance: 250, line_linked: { opacity: 0.45 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
let countParticles;
let stats;
let update;

stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
countParticles = document.querySelector('.js-count-particles');
update = () => {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    countParticles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
