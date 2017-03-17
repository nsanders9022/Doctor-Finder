var Doctor = require('./../js/doctor.js').doctorModule;


$(document).ready(function() {
  var myDoctor = new Doctor();
  $(".search").click(function() {
    var issue = $("#issue").val();
    myDoctor.getDoctors(issue);
  })
})
