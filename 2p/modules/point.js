class Point{
    constructor(x,y){
        this.x=x
        this.y=y
    }
    toString(){return '('+this.x+","+this.y}
    distancia(p){
        d=Math.sqrt(((p2.x-p1.x)*(p2.x-p1.x))+((p2.y-p1.y)(p2.y-p1.y)))
        return d }
    clone(){return new point(this.x,this.y)}
}

