//creacion de la grilla
let contenedor = document.getElementById('contenedorSudoku');
let btnClear = document.getElementById('btnClear');
let btnCheck = document.getElementById('btnCheck');
let cuadros = [];

for(let i=0; i<9; i++) {
    cuadros[i] = [];
    for(let j=0; j<9; j++) {
        cuadraditos = document.createElement('p');
        cuadraditos.innerHTML = '';
        cuadraditos.setAttribute('class','cuadro');
        contenedor.appendChild(cuadraditos);
        cuadros[i].push(cuadraditos);
    }
}

//funcion para cambiar numeros de cada cuadro de 1 a 9
for(let i=0; i<9; i++) {
    for(let j=0; j<9; j++) {
        cuadros[i][j].addEventListener('click', aumentarNumero);
        cuadros[i][j].addEventListener('contextmenu', disminuirNumero);
    }
}
function aumentarNumero(){
    this.classList.remove("error");
    if(this.innerHTML === ''){
        this.innerHTML = 1 ;
    }else if (this.innerHTML == 9) {
        this.innerHTML = '';     
    } else {
        this.innerHTML++;
    }
}
function disminuirNumero (e){
    e.preventDefault();
    this.classList.remove("error");
    if(this.innerHTML === ''){
        this.innerHTML = 9 ;
    }else if (this.innerHTML == 1) {
        this.innerHTML = '';     
    } else {
        this.innerHTML--;
    }
}
//lineas que separan recuadros
//horizontales
for (let h = 0; h < 9; h++) {
    cuadros[2][h].classList.add('lineaHorizontal');
    cuadros[5][h].classList.add('lineaHorizontal');
}

//verticales
for (let v = 0; v < 9; v++) {
    cuadros[v][2].classList.add('lineaVertical');
    cuadros[v][5].classList.add('lineaVertical');
}
//funcion para validar
function check(){
    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            cuadros[i][j].classList.remove("error");
        }
    }
    //horizontal
    for (let h = 0; h < 9; h++) { 
        for (let v = 0; v < 9; v++) {
            for (let vc = 0; vc < 9; vc++) {
                if ((cuadros[v][h].innerHTML == cuadros[vc][h].innerHTML) && (v != vc)){
                    cuadros[v][h].classList.add('error');
                    cuadros[vc][h].classList.add('error');                    
                }else if(cuadros[v][h].innerHTML == ''){
                    cuadros[v][h].classList.add('error');
                }
            }
        }
    }
    //vertical
    for (let v = 0; v < 9; v++) { 
        for (let h = 0; h < 9; h++) {
            for (let hc = 0; hc < 9; hc++) {
                if ((cuadros[v][h].innerHTML == cuadros[v][hc].innerHTML) && (h != hc)){
                    cuadros[v][h].classList.add('error');
                    cuadros[v][hc].classList.add('error');     
                }
            }
        }
    }
    //cuadros
    for(multiploHorizontal = 0; multiploHorizontal < 3 ; multiploHorizontal++){
        for(multiploVertical = 0; multiploVertical < 3 ; multiploVertical++){
            for(baseHorizontal = 0; baseHorizontal < 3; baseHorizontal++){
                for(baseVertical = 0; baseVertical < 3; baseVertical++){
                    for(comparadorHorizontal = 0; comparadorHorizontal < 3; comparadorHorizontal++){
                        for(comparadorVertical = 0; comparadorVertical < 3; comparadorVertical++){
                            if ((cuadros[baseVertical+3*multiploVertical][baseHorizontal+3*multiploHorizontal].innerHTML == cuadros[comparadorVertical+3*multiploVertical][comparadorHorizontal+3*multiploHorizontal].innerHTML) && (((baseHorizontal+3*multiploHorizontal) != (comparadorHorizontal+3*multiploHorizontal)) && ((baseVertical+3*multiploVertical) != (comparadorVertical+3*multiploVertical)))){
                                cuadros[baseVertical+3*multiploVertical][baseHorizontal+3*multiploHorizontal].classList.add('error');
                                cuadros[comparadorVertical+3*multiploVertical][comparadorHorizontal+3*multiploHorizontal].classList.add('error');     
                            }
                        }
                    }
                }
            }
        }
    }
    let error = 0;
    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            if(cuadros[i][j].classList.contains('error')){
                error = 1;
            }
        }
    }
    if (error==0){
        alert('Resolucion correcta');
    }else{
        alert('Resolucion incorrecta, corrija y vuelve a chequear');
    }
}
btnCheck.addEventListener('click', check);

var sudoku = '039452780052000049860007350001028067027549830385010290040000900970035008003084600';
var arraySudoku = sudoku.split('');
let index = 0;
while (index < arraySudoku.length) {
    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {       
            if ( arraySudoku[index] > 0) {            
                cuadros[i][j].innerHTML = arraySudoku[index];
                cuadros[i][j].classList.add('fijo');
                index++;
            }else{
                index++;
            }
        }
    }
}
//crear numeros fijos
/*var numeroRandom = Math.floor(Math.random() * (10 - 1)) + 1;
var correcto = 0;
var lleno = 0;
while (lleno != 1) {
    for (let multiploV = 0; multiploV<3; multiploV++) {
        for (let multiploH = 0; multiploH<3; multiploH++) {
            for (let h = 0; h<3; h++) {
                for (let v = 0; v<3; v++) {
                    numeroRandom = Math.floor(Math.random() * (10 - 1)) + 1;
                    if (cuadros[v+3*multiploV][h+3*multiploH].innerHTML == '' ) {
                        for (let vc = 0; vc < 9; vc++) {
                            if ((cuadros[vc][h+3*multiploH].innerHTML == numeroRandom ) && ((v+3*multiploV) != vc)){
                                correcto = 1;
                            }
                        }
                        for (let hc = 0; hc < 9; hc++) {
                            if ((cuadros[v+3*multiploV][hc].innerHTML == numeroRandom ) && ((h+3*multiploH) != hc)){
                                correcto = 1;
                            }
                        }
                        for (let baseH = 0; baseH < 3; baseH++) {
                            for (let baseV = 0; baseV < 3; baseV++) {
                                if((cuadros[baseV][baseH].innerHTML == numeroRandom) && ((baseV) != (v+3*multiploV) || baseH != (h+3*multiploH))){
                                    correcto = 1;
                                }
                            }
                        }   
                        if (correcto == 0) {
                            cuadros[v+3*multiploV][h+3*multiploH].innerHTML = numeroRandom; 
                            cuadros[v+3*multiploV][h+3*multiploH].classList.add('fijo');    
                        }
                    }
                    correcto = 0;
                }
            }
        }
    }
    for (let h = 0; h < 9; h++) { 
        for (let v = 0; v < 9; v++) {
            if (cuadros[v][h].innerHTML == ''){ 
                for(let i=0; i<9; i++) {
                    for(let j=0; j<9; j++) {          
                        cuadros[i][j].innerHTML = '';
                        cuadros[i][j].classList.remove("fijo");
                    }
                }
            }else {
                lleno=1;
            }
        }
    }
}*/


/*var numeroRandom = Math.floor(Math.random() * (10 - 1)) + 1;
var hRandom = Math.floor(Math.random() * (3 - 0)) + 0;
var vRandom = Math.floor(Math.random() * (3 - 0)) + 0;
var correcto = 0;
for (let i = 0; i<9; i++) {
    for (let h = 0; h<3; h++) {
        for (let v = 0; v<3; v++) {
            for (var numeroFijo = 1; numeroFijo<=(Math.floor(Math.random() * (6 - 5)) + 5); numeroFijo++) {
                hRandom = (Math.floor(Math.random() * (3 - 0)) + 0)+(3*h);
                vRandom = (Math.floor(Math.random() * (3 - 0)) + 0)+(3*v);
                numeroRandom = Math.floor(Math.random() * (10 - 1)) + 1;
                if (cuadros[vRandom][hRandom].innerHTML == '' ) {
                    for (let vc = 0; vc < 9; vc++) {
                        if ((cuadros[vc][hRandom].innerHTML == numeroRandom ) && (vRandom != vc)){
                            correcto = 1;
                        }
                    }
                    for (let hc = 0; hc < 9; hc++) {
                        if ((cuadros[vRandom][hc].innerHTML == numeroRandom ) && (hRandom != hc)){
                            correcto = 1;
                        }
                    }
                    for (let baseH = 0; baseH < 3; baseH++) {
                        for (let baseV = 0; baseV < 3; baseV++) {
                            if((cuadros[baseV+3*v][baseH+3*h].innerHTML == numeroRandom) && ((baseV+3*v) != vRandom || baseH+3*h != hRandom)){
                                correcto = 1;
                            }
                        }
                    }   
                    if (correcto == 0) {
                        cuadros[vRandom][hRandom].innerHTML = numeroRandom; 
                        cuadros[vRandom][hRandom].classList.add('fijo');          
                    }
                }
                correcto = 0;
            }
        }
    }
}*/
for(let i=0; i<9; i++) {
    for(let j=0; j<9; j++) {
        if (cuadros[i][j].classList.contains('fijo')) {            
            cuadros[i][j].removeEventListener('click', aumentarNumero);
            cuadros[i][j].removeEventListener('contextmenu', disminuirNumero);
        }
    }
}
    
//funcion de borrar
function clear(){
    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            if (!cuadros[i][j].classList.contains('fijo')) {            
                cuadros[i][j].innerHTML = "";
                cuadros[i][j].classList.remove("error");
            }
        }
    }
}
btnClear.addEventListener('click', clear);