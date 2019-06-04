print('Escribe tres numeros')


print('Introduce el 1 numero')
var x1=Number(readline())






    
print('Introduce el 2 numero')
    var x2=Number(readline())
    

    

    

    print('Introduce el 3 numero')
    var x3=Number(readline())
    

    

    
//1
    if(x1==0){
        print(x1+' es un elemento neutro aditivo')
    }else{
        print(x1+' no es un elemento neutro aditivo')
    }

    if(x2==0){
        print(x2+' es un elemento neutro aditivo')
    }else{
        print(x2+' no es un elemento neutro aditivo')
    }

    if(x3==0){
        print(x3+' es un elemento neutro aditivo')
    }else{
        print(x3+' no es un elemento neutro aditivo')
    }

    //2
    if(x1<0){
        print('La raiz cuadrada del numero es'+(x1*x1)
        )
    
    
    }else{
        print('No es negativo')
    }  

    if(x2<0){
        print('La raiz cuadrada del numero es'+(x2*x2)
        )


    }else{
        print('No es negativo')
    }

    if(x3<0){
        print('La raiz cuadrada del numero es'+(x3*x3)
        )


    }else{
        print('No es negativo')
    }


   print('el perimetro del triangulo es '+(x1+x2+x3))

   print()


   var ecu=((-x2)+Math.sqrt((x2*x2)-4*(x1)*(x3)))/(2*x1)
print('El primer resultado de la ecuacion es '+ecu)
   var ecu1=((-x2)-Math.sqrt((x2*x2)-4*(x1)*(x3)))/(2*x1)
print('El segundo resultado es '+ecu1)
   print()

