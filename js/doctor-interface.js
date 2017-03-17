var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(doctorData) {
  $(".doctor-info").hide();
  $(".results ul").append('<li id=' + doctorData.profile.last_name +'> <a href="#">' + doctorData.profile.first_name + " " + doctorData.profile.last_name + '</a></li>');

  $("li#" + doctorData.profile.last_name).click(function() {
    $(".doctor-info").show();
    $("#name").text(doctorData.profile.first_name + " " + doctorData.profile.last_name);
    $("#gender").text(doctorData.profile.gender);
    $("#bio").text(doctorData.profile.bio);
  });
};

$(document).ready(function() {
  var myDoctor = new Doctor();
  $("form#search-info").submit(function(event) {
    debugger;
    event.preventDefault();
    var doctorArray = [];
    $(".results ul").empty();
    var issue = $("#issue").val();
    $("#issue").val("");
    doctorArray = myDoctor.getDoctors(issue);
    console.log(doctorArray);
    $(".results").show();
    doctorArray.forEach(function(doctor) {
      displayDoctor(doctor);
    });
  });
});
