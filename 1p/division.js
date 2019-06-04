function task(){
    print('performing a task...')
}

function isNumber(arg){

    if(typeof(arg!='number')){

        throw new Error('No es numero')
    }
}

function isZero(arg){
    if(arg ===0)
    throw new Error('Error')
}


function division(p){
    a=3
    isNumber(a)
    b=5
    isNumber(b)
    isZero(b)//error
    p=a/b

    if(b!=0){
        return p
    }

    
}

print(division())
task()
print('done...')