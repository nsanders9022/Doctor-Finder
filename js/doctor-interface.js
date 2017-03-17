var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(issue, doctorData) {
  $(".results ul").append('<li>' + doctorData.profile.first_name + " " + doctorData.profile.last_name + '</li>');
}

$(document).ready(function() {
  var myDoctor = new Doctor();
  $(".search").click(function() {
    $(".results ul").empty();
    var issue = $("#issue").val();
    myDoctor.getDoctors(issue, displayDoctor);
  })
})
