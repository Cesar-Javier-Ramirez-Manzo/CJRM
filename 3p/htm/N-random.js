function convert() {
    var acum=0
    var may =0
    var a=Math.floor(Math.random()*(10-1)+1)
     var min=1000
    let x=document.getElementById("num").value
    console.log(typeof(document.getElementById("num").value))
   
    
    for(var i=0;i<=x-2;i++){
        let o = Math.floor(Math.random()*(10-1)+1)
        a=a+' \n'+o
        
        if(o >may){
            may=o
        }
        if(o<min){
            min=o
        }2
        acum=acum+o
   
        
       }
       var resul=acum/x
       document.getElementById("ar").innerHTML = a
       document.getElementById("out2").innerHTML = may
       document.getElementById("out3").innerHTML = min
       document.getElementById("out4").innerHTML = resul
 }