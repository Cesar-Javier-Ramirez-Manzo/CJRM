class Vector {
    constructor(a) {
        this.arr = a
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
    var add = this.arr[0]
    for (var x of this.arr) {
        if (this.arr[0] != x) {
            add = x + add
        }
    }
    console.log(add)
}

prom(){

    for (var x of this.arr) {
        var add = Number(this.arr[x] + add)
    }
    av = add / this.arr
}

vectorize(a, b, k){



    let ne = []


    for (var i = 0; i <= k; i++) {
        let div = b - a
        let su = div / k
        let sumador = 0


        ne[i] = (a + su)





        console.log(ne[i])


    }




}
}

const vector = new Vector([2, 3, 5, 6, 7, -2])


