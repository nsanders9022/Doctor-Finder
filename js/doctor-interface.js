var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(issue, doctorData) {
  $(".results").append("The doctors that can help you with " + issue + " are: " + doctorData.profile.first_name);
}

$(document).ready(function() {
  var myDoctor = new Doctor();
  $(".search").click(function() {
    var issue = $("#issue").val();
    myDoctor.getDoctors(issue, displayDoctor);
  })
})
