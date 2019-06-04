
var planetas={

    mercury:{
        diameter: 3100 + " millas",
        distance: 36 + " millones de millas",
        timeOrbit: 88 + "dias",
        timeRotate: 59 + " dias",

        distance1:Number(36)
    },

    venus:{
        diameter: 7700 + " millas",
        distance: 67 + " millones de millas",
        timeOrbit: 255 + "dias",
        timeRotate: 244 + " dias",

        distance1:Number(67)
    },

    earth:{
        diameter: 7920 + " millas",
        distance: 93 + " millones de millas",
        timeOrbit: 365 + "dias",
        timeRotate: 24 + " horas",

        distance1:Number(93)
    },

    mars:{
        diameter: 4200 + " millas",
        distance: 141 + " millones de millas",
        timeOrbit: 687 + "dias",
        timeRotate: 24 + " horas" + 24 + " mins",

        distance1:Number(141)

    },

    jupiter:{
        diameter: 88640 + " millas",
        distance: 483 + " millones de millas",
        timeOrbit: 11.9 + " años",
        timeRotate: 9 + " horas" + 50 + " mins",

        distance1:Number(483)

    },

    saturn:{
        diameter: 74500 + " millas",
        distance: 886 + " millones de millas",
        timeOrbit: 29.5 + " años",
        timeRotate: 10 + " horas" + 39 + " mins",

        distance1:Number(886)

    },

    uranus:{
        diameter: 32000 + " millas",
        distance: 1782 + " millones de millas",
        timeOrbit: 84 + " años",
        timeRotate: 23 + " horas" ,

        distance1:Number(1782)

    },

    neptune:{
        diameter: 31000 + " millas",
        distance: 2793 + " millones de millas",
        timeOrbit: 165 + "dias",
        timeRotate: 15 + " horas" + 48 + " mins",

        distance1:Number(2793)

    },

    pluto:{
        diameter: 1500 + " millas",
        distance: 3670 + " millones de millas",
        timeOrbit: 248 + " años",
        timeRotate: 6 + " dias" + 7 + " horas",

        distance1:Number(3670)

    },
}

function distance(a,b){

    d=Math.abs(a-b)

    return 'La distancia es de '+d+' millones de millas'
}




