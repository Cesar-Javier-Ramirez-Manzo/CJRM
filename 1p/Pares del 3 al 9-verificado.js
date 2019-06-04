
var i=3
//var i='a'

function verificate(){
    if (typeof(i)!='number'){
        throw new Error('no es un numero');
        
       }
       else
       while(i <10){
        if(i%2==0){
            print(i)
        }
        ++i
        }
      
}

verificate();



