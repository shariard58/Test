function submit1() {
  var a = document.getElementById("fname").value;
  var b = document.getElementById("lname").value;
  var c = parseInt(a) + parseInt(b);
  document.getElementById("res") = c;
}
