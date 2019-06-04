class Vector {
    constructor(a) {
        this.arr = a
        this.vec=null
        verificate(a)
    }




    initialize(a, b) {
        var vect = []
        for (let i = 0; i < b; i++) {

            vect[i] = a

            console.log(vect[i])

        }
        return vect
    }



min(){
    let m = this.arr[0]

    for (var x of this.arr) {
        if (m > x) {
            m = x
        }


    }

    return m
}

max(){
    let m = this.arr[0]

    for (var x of this.arr) {
        if (m < x) {
            m = x
        }


    }

    console.log(m)
}

sum(){
    let add = this.arr[0]
    var i=0
    for (var x of this.arr) {
        if (this.arr[0] != this.arr[i]) {
            add = (this.arr[i] + add)

        }
        i++
    }
    console.log(add)
}

prom(){

    let add = this.arr[0]
    var i=0
    for (var x of this.arr) {
        if (this.arr[0] != this.arr[i]) {
            add = (this.arr[i] + add)

        }
        i++
    }
    var av = add / i

    return av
}

vectorize(a, b, k){



    var nw = []


    for (var i = 0; i < k; i++) {
        var dis=Math.abs(b-a)
        var div=dis/k

         
        nw[i]=a+(div*(i+1))


    }

     
    this.vec = new Vector([...nw])





}

getData(){

    return this.arr
}

}

function verificate(a){

    if(typeof a!='object'){
        throw new Error
    }
}

const vector = new Vector([2, 3, 5, 6, 7, -2])