function convert() {
    var a=0
    for(var i=0;i<=9;i++){
     let o = Math.floor(Math.random()*(10-1)+1)
     
     var a=a+'\n'+o
     
    }
    document.getElementById("ar").innerHTML = a
 }