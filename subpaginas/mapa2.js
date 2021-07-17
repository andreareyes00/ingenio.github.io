class Mapa {
    constructor() {
    }

    getClick = () => {  
        //console.log(`top ${posicion.top}, posicion.right, posicion.bottom, left ${posicion.left}`); // coordinadas de imagen  
        
        map.addEventListener('click', function (e) {
  
            let x = Math.floor(e.clientX - posicion.left);
            let y = Math.floor(e.clientY - posicion.top);
            //console.log( `x = ${Math.floor(e.clientX - posicion.left)}, y = ${Math.floor(e.clientY - posicion.top)}`); //coordinadas del cursor

            switch(true) {
                case ((270 <= x && x <= 283) && (448 <= y && y <= 472) && cont === 19):
                    cont--;
                    cambiador(cont);
                    break;
                case ((737 <= x && x <= 752) && (147 <= y && y <= 170) && cont === 18):
                    cont--;
                    cambiador(cont);
                    break;
                case ((270 <= x && x <= 286) && (128 <= y && y <= 155) && cont === 17):
                    cont--;
                    cambiador(cont);
                    break;
                case ((576 <= x && x <= 635) && (286 <= y && y <= 309) && cont === 16):
                    cont--;
                    cambiador(cont);
                    break;
                case ((649 <= x && x <= 670) && (133 <= y && y <= 153) && cont === 15):
                    cont--;
                    cambiador(cont);
                    break;
                case ((((785 <= x && x <= 795) && (461 <= y && y <= 471)) || 
                        ((320 <= x && x <= 337) && (177 <= y && y <= 187)) || 
                        ((181 <= x && x <= 195) && (229 <= y && y <= 237))) && cont === 14):
                    cont--;
                    cambiador(cont);
                    break;
                case ((280 <= x && x <= 324) && (383 <= y && y <= 409) && cont === 13):
                    cont--;
                    cambiador(cont);
                    break;
                case ((293 <= x && x <= 314) && (74 <= y && y <= 90) && cont === 12):
                    cont--;
                    cambiador(cont);
                    break;
                case ((449 <= x && x <= 468) && (144 <= y && y <= 165) && cont === 11):
                    cont--;
                    cambiador(cont);
                    break;
                case ((674 <= x && x <= 714) && (168 <= y && y <= 213) && cont === 10):
                    cont--;
                    cambiador(cont);
                    break;
                case ((179 <= x && x <= 201) && (266 <= y && y <= 298) && cont === 9):
                    cont--;
                    cambiador(cont);
                    break;
                case ((514 <= x && x <= 532) && (343 <= y && y <= 386) && cont === 8):
                    cont--;
                    cambiador(cont);
                    break;
                case ((202 <= x && x <= 234) && (483 <= y && y <= 516) && cont === 7):
                    cont--;
                    cambiador(cont);
                    break;
                case ((351 <= x && x <= 387) && (436 <= y && y <= 481) && cont === 6):
                    cont--;
                    cambiador(cont);
                    break;
                case ((54 <= x && x <= 71) && (130 <= y && y <= 157) && cont === 5):
                    cont--;
                    cambiador(cont);
                    break;
                case ((173 <= x && x <= 198) && (187 <= y && y <= 208) && cont === 4):
                    cont--;
                    cambiador(cont);
                    break;
                case ((230 <= x && x <= 257) && (196 <= y && y <= 215) && cont === 3):
                    cont--;
                    cambiador(cont);
                    break;
                case ((490 <= x && x <= 510) && (298 <= y && y <= 314) && cont === 2):
                    cont--;
                    cambiador(cont);
                    break;
                case ((769 <= x && x <= 791) && (315 <= y && y <= 340) && cont === 1):
                    cont--;
                    cambiador(cont);
                    break;
                case ((456 <= x && x <= 480) && (163 <= y && y <= 189) && cont === 0):
                    map.src = imagenPrin[21];
                    document.getElementById("text").innerHTML = `<div align=center>¡¡Has logrado terminar el juego!! ¡¡Felicitaciones!!</div>`;
            }
                
        });
        
    }
}
