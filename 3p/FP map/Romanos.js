let roma=function(num){

    return num.map(function(rm){

        if(rm>=11&&rm!=10&&rm!=50&&rm!=100){
                
                var contador=0
                var num=''
                var m=''
                m=rm.toString()
               for(var i=0;i<m.length;i++){
                   n=m.charAt(i)

                   if(n=='5'&&contador==0){
                    num=num+'L'
                    contador++
                }
                if(n=='1'&&contador==0){
                    num=num+'C'
                    contador++
                }
                   if(n=='1'&&contador!=1){
                    if(contador>=1){
                        num=num+'I'
                        
                    }else

                    num=num+ 'X'
                    contador++
                }
                if(n=='2'&&contador!=1){
                    if(contador>=1){
                        num=num+'II'
                        
                    }else
                    num=num+ 'XX'
                    contador++

                }
                if(n=='3'&&contador!=1){
                    if(contador>=1){
                        num=num+'III'
                        
                    }else
                    num=num+ 'XXX'
                    contador++

                }
                if(n=='4'){
                    num=num+ 'IV'
                }
                if(n=='5'){
                    num=num+ 'V'
                }
                if(n=='6'){
                    num=num+ 'VI'
                }
                if(n == '7'){
                    num=num+ 'VII'
                }
                if(n=='8'){
                    num=num+ 'VIII'
                }
                if(n=='9'){
                    num=num+ 'IX'
                }
                
                contador++
                contador++
               }

                return num
                    
                
            

        }

        if(rm==1){

            return 'I'
        }
        if(rm==2){
            return 'II'
        }
        if(rm==3){
            return 'III'
        }
        if(rm==4){
            return 'IV'
        }
        if(rm==5){
            return 'V'
        }
        if(rm==6){
            return 'VI'
        }
        if(rm == 7){
            return 'VII'
        }
        if(rm==8){
            return 'VIII'
        }
        if(rm==9){
            return 'IX'
        }
        if(rm==10){
            return 'X'
        }
        if(rm==50){
            return 'L'
        }
        if(rm==100){
            return 'C'
        }

    })
}

let x=[1,2,3,43,50,100,101]

console.log(roma(x))

