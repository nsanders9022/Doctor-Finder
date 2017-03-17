var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(doctorData) {
  $(".doctor-info").hide();
  $(".results ul").append('<li id=' + doctorData.profile.last_name +'> <a href="#">' + doctorData.profile.first_name + " " + doctorData.profile.last_name + '</a></li>');
  $("li#" + doctorData.profile.last_name).click(function() {
    $(".doctor-info").show();
    $("#gender").text(doctorData.profile.gender);
    $("#bio").text(doctorData.profile.bio);
  });
};

$(document).ready(function() {
  var myDoctor = new Doctor();
  // var doctorArray = [];
  // console.log("empty at top " + doctorArray);
  $(".search").click(function() {
    $(".results ul").empty();
    var issue = $("#issue").val();
    var doctorArray = myDoctor.getDoctors(issue);
    console.log("populate array " + doctorArray);
    doctorArray.forEach(function(doctor) {
      displayDoctor(doctor);
    })
    var doctorArray = [];
    console.log("empty at end " + doctorArray);



    // myDoctor.getDoctors(issue, displayDoctor);
  })

})
