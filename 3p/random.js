function convert() {
   var a=Math.random()
   for(var i=0;i<8;i++){
    let o = Math.random()
    a=a+' \n'+o
    
   }
   document.getElementById("ar").innerHTML = a
}