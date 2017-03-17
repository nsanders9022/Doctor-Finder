var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(issue, doctorData) {
  $(".doctor-info").hide();
  $(".results ul").append('<li id=' + doctorData.profile.last_name +'> <a href="#">' + doctorData.profile.first_name + " " + doctorData.profile.last_name + '</a></li>');
  $("li#" + doctorData.profile.last_name).click(function() {
    $(".doctor-info").toggle();
    $("#gender").text(doctorData.profile.gender);
    $("#bio").text(doctorData.profile.bio);
  });
};

$(document).ready(function() {
  var myDoctor = new Doctor();
  $(".search").click(function() {
    $(".results ul").empty();
    var issue = $("#issue").val();
    myDoctor.getDoctors(issue, displayDoctor);
  })

})
