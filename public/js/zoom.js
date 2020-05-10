$('.form__symptoms')
  .focus(() => {
    $('.form__label.symptoms').attr('id', 'labelGlow');
  })
  .blur(() => {
    $('#labelGlow').removeAttr('id');
  });

$('.form__diagnosis')
  .focus(() => {
    $('.form__label.diagnosis').attr('id', 'labelGlow');
  })
  .blur(() => {
    $('#labelGlow').removeAttr('id');
  });
