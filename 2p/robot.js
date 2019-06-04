class Robot{
    constructor(name){
        this.name= name
        this.speak=('hola')
        this.makeCoffe=('no hay cafe')
        this.blink=('parpadea*')
    }
    speak(){
        console.log(this.speak)
    }
    makeCoffe(){

        console.log(this.makeCoffe)
    }
    blink(){

        console.log(this.blink)
    }



}

var a=new Robot('aRobot')
