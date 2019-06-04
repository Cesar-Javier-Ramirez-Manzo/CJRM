var r=5
var x1=0
var y1=0

print('Da un punto x y uno y')
var x2=Number(readline())
var y2=Number(readline())

var d=Math.sqrt(((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1)))

if(d<r){
    print('Esta dentro del circulo')
}

if(d>r){
    print('Esta fuera del circulo')
}

if(d==r){
    print('Esta en el circulo')
}