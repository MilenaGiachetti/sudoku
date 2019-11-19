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
    cuadros[2][h].classList.add('class','lineaHorizontal');
    cuadros[5][h].classList.add('class','lineaHorizontal');
}

//verticales
for (let v = 0; v < 9; v++) {
    cuadros[v][2].classList.add('class','lineaVertical');
    cuadros[v][5].classList.add('class','lineaVertical');
}
//funcion de borrar
function clear(){
    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            cuadros[i][j].innerHTML = "";
            cuadros[i][j].classList.remove("error");
        }
    }
}
btnClear.addEventListener('click', clear);
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
                    cuadros[v][h].classList.add('class','error');
                    cuadros[vc][h].classList.add('class','error');                    
                }else if(cuadros[v][h].innerHTML == ''){
                    cuadros[v][h].classList.add('class','error');
                }
            }
        }
    }
    //vertical
    for (let v = 0; v < 9; v++) { 
        for (let h = 0; h < 9; h++) {
            for (let hc = 0; hc < 9; hc++) {
                if ((cuadros[v][h].innerHTML == cuadros[v][hc].innerHTML) && (h != hc)){
                    cuadros[v][h].classList.add('class','error');
                    cuadros[v][hc].classList.add('class','error');     
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
                                cuadros[baseVertical+3*multiploVertical][baseHorizontal+3*multiploHorizontal].classList.add('class','error');
                                cuadros[comparadorVertical+3*multiploVertical][comparadorHorizontal+3*multiploHorizontal].classList.add('class','error');     
                            }
                        }
                    }
                }
            }
        }
    }
}
btnCheck.addEventListener('click', check);
