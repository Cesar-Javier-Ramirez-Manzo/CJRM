const arra=[1,2,3,4,5]
var contador=0
var c=0
var b=0

let v=function(a,b){
    for(var a=0;a<arra.length;a++){
        b=b+arra[a]
    }
    var m=b/arra.length
    for(var i=0;i<=arra.length;i++){
        c=c+(Math.pow(a+b+m,2))
        contador++

    }
     return c/contador
}

console.log(arra.reduce(v,0))


