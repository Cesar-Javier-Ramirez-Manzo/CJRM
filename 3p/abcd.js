function mp(list){
    let nm=list.map(function(number){
        if(number=='a'){
            return 3
        }
        if(number=='b'){
            return 2
        }
        if(number=='c'){
            return 1
        }
    })

    return nm
}



let a=['a','b','c','a','c','b']
console.log(mp(a))

