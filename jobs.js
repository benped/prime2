  var example = ["Designer","Woodworker", "Photographer", "Marketer", "Programmer?", "3D Modeler", "Data Analyst"];

  textSequence(0);

  function textSequence(i) {

    if (example.length > i) {
      setTimeout(function() {
        document.getElementById("sequence").innerHTML = example[i];
        textSequence(++i);
      }, 2000);

    } else if (example.length == i) {
      textSequence(0);
    }

  }s
