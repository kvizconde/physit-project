function nameHover() {
  const patientName = $('.patient_container__name');
  const patientInfo = $('.patient_container__info');

  $('#patientDiv').on({
    mouseenter() {
      $(patientInfo)
        .insertAfter(patientName)
        .slideDown(400);
    },
    mouseleave() {
      $(patientInfo)
        .insertAfter(patientName)
        .slideUp(350);
    },
  });
}

nameHover();
