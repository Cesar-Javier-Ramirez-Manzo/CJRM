var arr=[10,20,30,40]



let sub=function(x,y){

    a=x+y/arr.length

    return a
    
}




console.log(arr.reduce(sub,0))


