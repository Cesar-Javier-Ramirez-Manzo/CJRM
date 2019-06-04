
function isEntero(n){

    if(n-(Math.round(n))===0){

        return true

    }else{
        return false
    }
        


}

function isDecimal(n){
    return isEntero(n)
}
print(isEntero(2.4))
print(isDecimal(2))
