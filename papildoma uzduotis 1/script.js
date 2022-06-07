window.onload = function () {
    let radius = 1;

    console.log(Math.PI);
    console.log(calculateCircumference(radius));

}

//function calculateCircumference(radius) {
   //return Math.PI * radius + radius;
  //}

  function calculateCircumference(radius) {
    return Math.PI * radius * radius;
  }