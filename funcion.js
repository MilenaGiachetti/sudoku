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
for (let h = 0; h < 9; h++) {
    cuadros[2][h].classList.add('class','lineaHorizontal');
    cuadros[5][h].classList.add('class','lineaHorizontal');
}

//verticales
for (let v = 0; v < 9; v++) {
    cuadros[v][2].classList.add('class','lineaVertical');
    cuadros[v][5].classList.add('class','lineaVertical');
}

function clear(){
    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            cuadros[i][j].innerHTML = "";
        }
    }
}
    /*for (let c = 0; c < cuadros.length; c++) {
        cuadros[c].innerHTML = "";
    } 
}*/
btnClear.addEventListener('click', clear);
/*function check(){
    for (let check = 0; check < 9; check++) {
        for (let linecheck = 1; linecheck < 10; linecheck++) {
            if()


        } 
    }
}
btnCheck.addEventListener('click', check);*/
