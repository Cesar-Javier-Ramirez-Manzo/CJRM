//generar tripletas con una serie de numeros y cuantas son
function convert() {
    let t = document.getElementById("temp").value
    let o = []=t.split(' ')
    var contador=0
           var acum =0

    for(var i=0;i<7;i++){
       sum=0
       for(var q=i+1;q<7;q++){
        if(q==6){
            break
        }
           for(var w=i+2;w<7;w++){
            if(w==6){
                break
            }
               sum=parseInt(o[i]) +parseInt(o[q])+parseInt(o[w])
               if(sum==0){
                   contador++
                   acum=acum+o[i]+' '+o[q]+' '+o[w]+'\n'
                   

                   
               }


           
           }
       }
    }
    

    

    document.getElementById("out2").innerHTML=acum
    document.getElementById("out").innerHTML = contador+' suma de numeros son igual a 0'
}
