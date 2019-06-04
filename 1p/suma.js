function task(){
    print('performing a task...')
}

function suma(p){
    a=3
    print(isNumber(a))
b=5
print(isNumber(b))

    p=a+b



    return p
}

function isNumber(x){
if(typeof x==='number')
    return true
    else 
    throw new Error('No es numero')

}


print(suma(a,b))
task()
print('done...')