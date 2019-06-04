

function isPositive(n){

    if(n>0){

        return true
    }else{

        return false
    }
}

function isNegative(n){

    return isPositive(n)
}
print(isPositive(2))
print(isNegative(-2))