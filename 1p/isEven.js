function isEven(n){

    if(n%2==0){

        return true
    }else{
        return false
    }
}

function isOdd(n){

    return !isEven(n)
}

print(isEven(4))
print(isEven(5))
print(isOdd(4))
print(isOdd(5))