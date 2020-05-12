// load shoulder symptoms/diagnosis and header
$('#shoulder3d').on('load', () => {
  $('#inputBox_shoulder').css({
    transition: 'all .65s ease-out',
    transform: 'translateX(0)',
  });

  $('#shoulderView').fadeIn(666);
});

// load knee symptoms/diagnosis and header
$('#knee3d').on('load', () => {
  $('#inputBox_knee').css({
    transition: 'all .65s ease-out',
    transform: 'translateX(0)',
  });

  $('#kneeView').fadeIn(666);
});

// style for input labels
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
