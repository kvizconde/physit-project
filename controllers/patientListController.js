// const patientListModel = require('../models/patientListData');
// const loginModel = require('../models/loginData');

// const getDate = () => {
//   const d = new Date('April 30, 2020 01:15:00');
//   const year = d.getFullYear().toString();
//   const day = d.getDate();
//   let month = d.getMonth();

//   if (month < 9) {
//     month += 1;
//     month = `0${month}`;
//   } else {
//     month += 1;
//     month.toString();
//   }

//   const date = `${year}-${month}-${day}`;

//   return date;
// };

// exports.renderPatientList = async (req, res) => {
//   try {
//     const { physioID } = req.session;
//     const physiotherapist = await loginModel.getPhysiotherapist(physioID);
//     const patientList = await patientListModel.getPatientAppointmentData(physioID, getDate());

//     res.render('patientList', {
//       title: 'HOME',
//       patientListJSCSS: true,
//       indexJSCSS: false,
//       physiotherapist: physiotherapist[0][0],
//       patients: patientList[0],
//     });
//   } catch (error) {
//     throw error;
//   }
// };

// LOCAL - DON'T TOUCH
exports.renderPatientList = (req, res) => {
  res.render('patientList', {
    title: 'HOME',
    patientListJSCSS: true,
    indexJSCSS: false,
  });
};
