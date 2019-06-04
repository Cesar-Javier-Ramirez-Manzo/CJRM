function task(){
    print('performing a task...')
}

function resta(p){
    a=3
    print(isNumber(a))
b=5
print(isNumber(b))
    p=a-b



    return p
}

function isNumber(x){
    if(typeof x==='number')
        return true
        else 
        throw new Error('No es un numero')
    
    }

print(resta(a,b))
task()
print('done...')