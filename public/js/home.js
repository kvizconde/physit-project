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

// BioDigital Stuff - Done by Kevin
const human = new HumanAPI('bioDigital');
const shoulders = {
  leftShoulder: 'human_10_male_muscular_system-left_deltoid_ID',
  rightShoulder: 'human_10_male_muscular_system-right_deltoid_ID',
};

let leftShoulderId;
let rightShoulderId;

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

human.on('hotspots.picked', event => {
  if (event.id === leftShoulderId || event.id === rightShoulderId) {
    window.location.href = '/shoulder';
  }
});
