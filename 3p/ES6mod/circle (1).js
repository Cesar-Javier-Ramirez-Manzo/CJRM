class Circle{

    constructor(p1,p2){

        this.p1=p1
        this.p2=p2
        verificate(this.p1)
        verificate(this.p2)
    }

    makeCircle(p1,p2){
        var r=Math.sqrt(Math.pow(this.p2.x-this.p1.x,2)+Math.pow(this.p2.y-this.p1.y,2))

        a=Math.PI*(Math.pow(r,2))
        console.log('Circulo de area '+a+' y de un radio '+r)


    }

    getR(){
        var r=Math.sqrt(Math.pow(this.p2.x-this.p1.x,2)+Math.pow(this.p2.y-this.p1.y,2))

        return r
    }
}



function verificate(a){

    if(a instanceof Point == false ||typeof a =='string'){
        throw new Error
    }
}

//export{Circle};
