function getinput() {
  //do {
  document.write("a: <input type='number' name='a' id='a'><br>");
  document.write("b: <input type='number' name='b' id='b'><br>");
  document.write("<button onclick='add()'>Add</button>");
  document.write("<button onclick='sub()'>Subtract</button>");
  document.write("<button onclick='mul()'>Multiply</button>");
  document.write("<button onclick='div()'>Divide</button>");
  // } while (true)
}
function process(x) {
  return parseFloat(x);
}
function add() {
  var a = process(document.getElementById("a").value);
  var b = process(document.getElementById("b").value);
  var sum = a + b;
  printout(a, b, "+", sum);
}
function sub() {
  var a = process(document.getElementById("a").value);
  var b = process(document.getElementById("b").value);
  var sum = a - b;
  printout(a, b, "-", sum);
}
function mul() {
  var a = process(document.getElementById("a").value);
  var b = process(document.getElementById("b").value);
  var sum = a * b;
  printout(a, b, "*", sum);
}
function div() {
  var a = process(document.getElementById("a").value);
  var b = process(document.getElementById("b").value);
  var sum = a / b;
  printout(a, b, "/", sum);
}
function printout(a, b, op, sum) {
  document.write("<br>");
  text = a + op + b + "=" + sum;
  document.write("<p>" + text + "</p>");
  document.write("<br>");
  pausecomp(100);
}
function pausecomp(ms) {
  ms += new Date().getTime();
  while (new Date() < ms){}
  }

 
while (true){getinput();}

