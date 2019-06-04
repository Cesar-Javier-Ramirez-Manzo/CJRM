function isZero(arg){
    if(arg ===0)
    throw new Error('zero div')
    else
    return arg
}

print(isZero(5))//error
isZero(0)//ok