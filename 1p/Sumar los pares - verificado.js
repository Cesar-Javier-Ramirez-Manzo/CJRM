var i=3
//var i='a'
var sum=0
function verificate(){
    if (typeof(i)!='number'){
        throw new Error('no es un numero');
        
       }
       else
       while(i <10){
        if(i%2==0){
            print(i)
            sum=sum+i
        }
        ++i
        }
        print('la suma total de los pares es '+sum)
      
}

verificate();
