class Converter{

constructor(a){

    this.a=''+a
}


caract(){
   console.log(this.a.length+ ' caracteres')
    
}

palabr(){

    console.log(this.a.split(' ').length)
}

orac(){
 console.log(this.a.split(',','.').length)
}

parraf(){
console.log(this.a.split('\n\n').length)
}

}

var x=new Converter('Hola soy cesar')