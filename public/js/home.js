/*
----------------------------------------------------------------------------------

README: The Following JS file Has Been Created by KEVIN VIZCONDE

• Setup function for name hover which displays patient information
• Added BioDigital functions such as creating hotspots,
  and loading zoomed in body view when hotspot is clicked

Original and Final Revision/Design: Kevin Vizconde

----------------------------------------------------------------------------------
*/

function nameHover() {
  const patientName = $('.patient_container__name');
  const patientInfo = $('.patient_container__info');

  $('#patientDiv').on({
    mouseenter() {
      $(patientInfo)
        .insertAfter(patientName)
        .stop()
        .slideDown(350);
    },
    mouseleave() {
      $(patientInfo)
        .insertAfter(patientName)
        .stop()
        .slideUp(200);
    },
  });
}

nameHover();

$('#preloader')
  .css('visibility', 'visible')
  .hide()
  .fadeIn(666);

// BioDigital Stuff - Done by Kevin
const human = new HumanAPI('bioDigital');
const shoulders = {
  leftShoulder: 'human_10_male_muscular_system-left_deltoid_ID',
  rightShoulder: 'human_10_male_muscular_system-right_deltoid_ID',
};

const knees = {
  leftKnee: 'human_10_male_skeletal_system-left_patella_ID',
  rightKnee: 'human_10_male_skeletal_system-right_patella_ID',
};

let leftShoulderId;
let rightShoulderId;

let leftKneeId;
let rightKneeId;

human.send(
  'hotspots.create',
  {
    objectId: shoulders.leftShoulder,
    type: 'circle-plus',
  },
  id => {
    leftShoulderId = id;
  },
);

human.send(
  'hotspots.create',
  {
    objectId: shoulders.rightShoulder,
    type: 'circle-plus',
  },
  id => {
    rightShoulderId = id;
  },
);

human.send(
  'hotspots.create',
  {
    objectId: knees.leftKnee,
    type: 'circle-plus',
  },
  id => {
    leftKneeId = id;
  },
);

human.send(
  'hotspots.create',
  {
    objectId: knees.rightKnee,
    type: 'circle-plus',
  },
  id => {
    rightKneeId = id;
  },
);

human.on('hotspots.picked', event => {
  if (event.id === leftShoulderId || event.id === rightShoulderId) {
    window.location.href = '/shoulder';
  }

  if (event.id === leftKneeId || event.id === rightKneeId) {
    window.location.href = '/knee';
  }
});
