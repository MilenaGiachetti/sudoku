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
}
btnCheck.addEventListener('click', check);

//crear numeros fijos
var numeroFijo = 1;
var numeroRandom = Math.floor(Math.random() * (10 - 1)) + 1;
var hRandom = Math.floor(Math.random() * (3 - 0)) + 0;
var vRandom = Math.floor(Math.random() * (3 - 0)) + 0;
var correcto = 0;
for (let i = 0; i<9; i++) {
    while (numeroFijo <= Math.floor(Math.random() * (7 - 4)) + 4) {
        hRandom = Math.floor(Math.random() * (3 - 0)) + 0;
        vRandom = Math.floor(Math.random() * (3 - 0)) + 0;
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
                    if((cuadros[baseV][baseH].innerHTML == numeroRandom) && (baseV != vRandom || baseH != hRandom)){
                        correcto = 1;
                    }
                }
            }   
            if (correcto == 0) {
                cuadros[vRandom][hRandom].innerHTML = numeroRandom; 
                cuadros[vRandom][hRandom].classList.add('fijo');            
                numeroFijo++;
            }
        }
        correcto = 0;
    }
}
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