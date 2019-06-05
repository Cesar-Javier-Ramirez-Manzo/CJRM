class Fraccion{
    constructor(n,d){
        this.n=n
        verificate(this.n)
        this.d=d
        verificate(this.d)


    }

    sum(f){
        var n=this.n*f.d+this.d*f.n
        var d=this.d*f.d

        return new Fraccion(n,d).euclides()



    }
    res(f){
        var n=this.n*f.d-this.d*f.n
        var d=this.d*f.d

        return new Fraccion(n,d).euclides()

    }
    div(f){

        var n=this.n*f.d
        var d=this.d*f.n

        return new Fraccion(n,d).euclides()
    }

    mul(f){
        var n=this.n*f.n
        var d=this.d*f.d

        return new Fraccion(n,d).euclides()
    }

    euclides(){

        if(this.d%this.n!=0){

            var acum=this.d%this.n
            

            var last=this.n

            if(acum!=0){

                var last2=acum
                var cont=0
                if(cont>=1){
                    acum=acum%last2
                }
                acum=acum%last

                
            }
            var n=this.n/acum
            var d=this.d/acum
            

        }else{
            var  n=this.n
            var  d=this.d
        }

        return new Fraccion(n,d)
    }
}

function verificate(a){

    if(a==0||typeof a!= 'number'){
        throw new Error 
    }
}


var f1=new Fraccion(4,2)
var f2=new Fraccion(5,4)