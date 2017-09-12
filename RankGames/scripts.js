
var Puntuaciones = [ ['The Witcher', 'Zelda Ocarina of Time', 'TES Skyrim'],[0,0,0] ];

alert();


function RecibirVoto(numero) {
  Puntuaciones[1][numero] += 1;
  var btn1 = document.getElementById('01').disabled = true;
}
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

function RecibirDatos() {

}
