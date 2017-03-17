var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(array) {
  array.forEach(function(doctor) {
    $(".results ul").append('<li>' + doctor.profile.first_name + " " + doctor.profile.last_name + '</li>');
  })
  // $(".results ul").append('<li>' + doctorData.profile.first_name + " " + doctorData.profile.last_name + '</li>');
}

$(document).ready(function() {
  var myDoctor = new Doctor();
  var doctorArray =[]
  console.log("initiate: " + doctorArray);
  $(".search").click(function() {
    $(".results ul").empty();
    var issue = $("#issue").val();
    doctorArray = myDoctor.getDoctors(issue);
    console.log("call getDoctors: " + doctorArray);
    displayDoctor(doctorArray);
    doctorArray = [];
    console.log("empty at end: " + doctorArray);
  })
})
