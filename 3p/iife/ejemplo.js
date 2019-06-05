(function (x) {return x})(2)



(function (x){
    return function (y){
        return x*y
    }
})(2)(3)


//no es una iife/funcion que se invoca sola
function (x){
    return function (y){
        return x*y
    }
}(2)(3)