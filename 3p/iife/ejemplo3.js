//funcion comun
function foo(){

    console.log('Called Foo')
}


//funcion de un objeto
var bar= function(){
    console.log('Called bar')
}


//funcion iife
(function (){
    console.log('this function is iife')
})()


//esta es alternativa
(function (){
    console.log('this function is iife')
}())

//aqui se invocan las que no son iife
foo()
bar()