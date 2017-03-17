var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(doctorData) {
  $(".doctor-info").hide();
  $(".results ul").append('<li id=' + doctorData.profile.last_name +'> <a href="#">' + doctorData.profile.first_name + " " + doctorData.profile.last_name + '</a></li>');

  $("li#" + doctorData.profile.last_name).click(function() {
    $("#picture").empty()
    $(".doctor-info").show();
    $("#name").text(doctorData.profile.first_name + " " + doctorData.profile.last_name);
    $("#gender").text(doctorData.profile.gender);
    $("#bio").text(doctorData.profile.bio);
    $("#picture").append('<img src="' + doctorData.profile.image_url + '">')
  });
};

$(document).ready(function() {
  $("form#search-info").submit(function(event) {
    event.preventDefault();
    var myDoctor = new Doctor();
    var doctorArray = [];
    $(".results ul").empty();
    var issue = $("#issue").val();
    doctorArray = myDoctor.getDoctors(issue);
    $("#issue").val("");
    $(".results").show();

    doctorArray.forEach(function(doctor) {
      displayDoctor(doctor);
    })
  })
})
