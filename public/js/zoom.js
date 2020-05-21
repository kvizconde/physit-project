/*
----------------------------------------------------------------------------------

README: The Following JS file Has Been Created by KEVIN VIZCONDE

• Animating/displaying symptoms/diagnosis box
• Styling(glowing) input labels when corresponding text area is in focus

Original and Final Revision/Design: Kevin Vizconde

----------------------------------------------------------------------------------
*/

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
