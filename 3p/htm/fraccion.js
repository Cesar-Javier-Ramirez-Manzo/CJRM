
//
// this may be a class, object, module, or function
//



function convert() {
    
    let t = new Fraccion(parseInt( document.getElementById("temp")  . value),parseInt( document.getElementById("temp3"  ) .value))
    console.log(t)
    let y=new Fraccion(parseInt( document.getElementById("temp1"  ) .value),parseInt( document.getElementById("temp2"  ) .value))
    console.log(y)
    console.log(document.getElementById("sign"))
    console.log(t.sum(y))
   if( document.getElementById("sign").value=='+'){
    document.getElementById("out").innerHTML = t.sum(y).n+' /'+t.sum(y).d

   }
   if(document.getElementById("sign").value=='x'){
    document.getElementById("out").innerHTML = t.mul(y).n+' /'+t.mul(y).d

   }
   if(document.getElementById("sign").value=='/'){
    document.getElementById("out").innerHTML = t.div(y).n+' /'+t.div(y).d

   }
   if(document.getElementById("sign").value=='-'){
    document.getElementById("out").innerHTML = t.res(y).n+' /'+t.res(y).d


}


    
}
