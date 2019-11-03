//creacion de la grilla
let contenedor = document.getElementById('contenedorSudoku');
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
for (var e = 0; e < cuadros.length; e++) {
    cuadros[e].addEventListener('click', restriccionNumero);
} 
function restriccionNumero(){
    if(this.innerHTML === ''){
        this.innerHTML = 1 ;
    }else if (this.innerHTML == 9) {
        this.innerHTML = '';     
    } else {
        this.innerHTML++;
    }
}

//lineas que separan recuadros
for (let a = 18; a < 27; a++) {
    cuadros[a].classList.add('class','lineaHorizontal');
}
for (let a = 45; a < 54; a++) {
    cuadros[a].classList.add('class','lineaHorizontal');
}
cuadros[2].classList.add('class','lineaVertical');
cuadros[5].classList.add('class','lineaVertical');
cuadros[11].classList.add('class','lineaVertical');
cuadros[20].classList.add('class','lineaVertical');
cuadros[29].classList.add('class','lineaVertical');
cuadros[38].classList.add('class','lineaVertical');
cuadros[47].classList.add('class','lineaVertical');
cuadros[56].classList.add('class','lineaVertical');
cuadros[65].classList.add('class','lineaVertical');
cuadros[74].classList.add('class','lineaVertical');
cuadros[14].classList.add('class','lineaVertical');
cuadros[23].classList.add('class','lineaVertical');
cuadros[32].classList.add('class','lineaVertical');
cuadros[41].classList.add('class','lineaVertical');
cuadros[50].classList.add('class','lineaVertical');
cuadros[59].classList.add('class','lineaVertical');
cuadros[68].classList.add('class','lineaVertical');
cuadros[77].classList.add('class','lineaVertical');