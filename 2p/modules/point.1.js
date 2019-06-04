class Point{
    constructor(x,y){
        this._x=x
        this._y=y
        verificate(this._x)
        verificate(this._y)
    }
draw(){console.log('draw point')}
    clone(){return new point(this.x,this.y)}

get x(){return this._x}
get y(){return this._y}
set x(x){this._x=x}
set y(y){this._y=y}

}

function verificate(a){

    if(typeof a =="null"||a==0){

        throw new Error
    }
}

