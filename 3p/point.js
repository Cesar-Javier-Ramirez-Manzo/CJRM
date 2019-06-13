 class Point{
    constructor(x,y){
        this.x=x
        this.y=y
        console.log('geometry->point->constructor')
    }
    toString(){return '('+this.x+","+this.y}
    distancia(x,y){
        var d= Math.sqrt(Math.pow(x-this.x,2)+Math.pow(y-this.y,2))
        return d
        }
    clone(){return new Point(this.x,this.y)}
}

export{Point};


