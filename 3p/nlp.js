function cont(){
var text=document.getElementById("txt").value

document.getElementById("out").innerHTML=text.length

var pal=text.split(' ')
document.getElementById("out1").innerHTML=pal.length

var orac=text.split(', ')
document.getElementById("out2").innerHTML=orac.length

var parr=text.split("\n\n")
document.getElementById("out3").innerHTML=parr.length
}