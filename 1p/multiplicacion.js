function task(){
    print('performing a task...')
}

function multi(p){
    a=3
    //a='c'
    print(isNumber(a))
b=5
print(isNumber(b))
    p=a*b



    return p
}

function isNumber(x){
    if(typeof x==='number')
        return true
        else 
        throw new Error('NO es numero')
    
    }
print(multi())
task()
print('done...')