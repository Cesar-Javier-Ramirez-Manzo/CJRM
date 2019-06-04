class Fecha{
    constructor(dia,mes,año){
        validate(dia)
        validate(mes)
        validate(año)

        this.dia=dia
        
        this.mes=mes
        this.año=año
    
    }

    getDia(){return this.dia}
    setDia(d){this.dia=d}
    getMes(){return this.mes}
    setMes(m){this.mes=m}
    getAño(){return this.año}
    setAño(a){this.año=a}

    getfecha(){
        return 'Es el '+this.dia+' en el mes '+this.mes+' del '+this. año
    }

    aumentDia(){

        this.dia++
        if(this.dia>=32){
            this.dia=1
            this.mes++
            if(this.mes>=13){

                this.mes=1
                this.año++
            }
        }
    }


}

function validate(a){
if(typeof a!='number'){

    throw new Error
}

}


var f1=new Fecha(31,12,1999)

