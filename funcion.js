//creacion de la grilla
let contenedor = document.getElementById('contenedorSudoku');
let btnClear = document.getElementById('btnClear');
let btnCheck = document.getElementById('btnCheck');
let cuadros = [];
let i = 0;

while(i, i<81){
    cuadraditos = document.createElement('p');
    cuadraditos.innerHTML = '';
    cuadraditos.setAttribute('class','cuadro');
    contenedor.appendChild(cuadraditos);
    cuadros.push(cuadraditos);
    i++;
}
//funcion para cambiar numeros de cada cuadro de 1 a 9
for (let e = 0; e < cuadros.length; e++) {
    cuadros[e].addEventListener('click', aumentarNumero);
    cuadros[e].addEventListener('contextmenu', disminuirNumero);
} 
function aumentarNumero(){
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
for (let h = 18; h < 27; h++) {
    cuadros[h].classList.add('class','lineaHorizontal');
}
for (let h = 45; h < 54; h++) {
    cuadros[h].classList.add('class','lineaHorizontal');
}
//verticales
for (let v = 0; v < 81; v++) {
    for (let n = 0; n <= 9; n++) {
        if(v == 2 + 9*n || v == 5 +9*n){
            cuadros[v].classList.add('class','lineaVertical');
        }
    }
}

function clear(){
    for (let c = 0; c < cuadros.length; c++) {
        cuadros[c].innerHTML = "";
    } 
}
btnClear.addEventListener('click', clear);
/*function check(){
    for (let check = 0; check < 9; check++) {
        for (let linecheck = 1; linecheck < 10; linecheck++) {
            if()


        } 
    }
}
btnCheck.addEventListener('click', check);*/
