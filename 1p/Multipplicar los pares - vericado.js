var i=3
//var i='a'

var mult=1
function verificate(){
    if (typeof(i)!='number'){
        throw new Error('no es un numero');
        
       }
       else
       while(i <10){
        if(i%2==0){
            print(i)
            mult=mult*i
        }
        ++i
        }
        print('la multiplicacion total de los pares es '+mult)
      
}

verificate();
