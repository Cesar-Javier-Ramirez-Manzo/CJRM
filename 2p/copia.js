var aPoint={
    x:3,
    y:4,
    distancia:function(p2){
        var d1=p2.x-aPoint.x
        var d2=p2.y-aPoint.y
    
        d1=d1**2
        d2=d2*+2
    
        return Math.sqrt(d1+d2)

    }
 
 
}

var bPoint={
    x:3,
    y:4,
}

