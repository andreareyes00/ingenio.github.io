const imagenPrin = [['i01.png', '02.png', '03.png', '04.png', '05.png', '06.png', 
            '07.png', '08.png', '09.png', '10.png', '11.png', '12.png', '13.png', 
            '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png'], 
            'avisual1.jpg', 'avisual2.jpg', 'avisual3.jpg', 'avisual4.jpg', 'avisual5.jpg', 
            'avisual6.jpg', 'avisual7.jpg', 'avisual8.jpg', 'avisual9.jpg', 'avisual10.jpg', 
            'avisual11.jpg', 'avisual12.jpg', 'avisual13.jpg', 'avisual14.jpg', 'avisual15.jpg', 
            'avisual16.jpg', 'avisual17.jpg', 'avisual18.jpg', 'avisual19.jpg', 'avisual20.jpg', 
            'avisual.jpg'];

let map = document.getElementById("map");
let buscar = document.getElementById("buscar");
let posicion = map.getBoundingClientRect(); //linias 6 y 10 en mapa.js

let cont = 19;
buscar.src = imagenPrin[0][cont];

const cambiador = (cont) => {
    buscar.src = imagenPrin[0][cont];
    map.src = imagenPrin[cont + 1];
}

const mapa = new Mapa();
mapa.getClick();
