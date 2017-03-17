var apiKey = require('./../.env').apiKey;

var Doctor = function() {
};

var doctorArray = [];

Doctor.prototype.getDoctors = function(medicalIssue, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(response) {
    doctorArray = [];
    response.data.forEach(function(doctor) {
      doctorArray.push(doctor);
      displayFunction(doctor);

      // console.log(JSON.stringify(response));
    });
  })
  .fail(function(error){
    $(".results").text("error");
  });
  return doctorArray;
};

exports.doctorModule = Doctor;
