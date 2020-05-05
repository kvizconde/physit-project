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
