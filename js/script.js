let nombrePersona = prompt('¡Hola! ¿Cuál es tu nombre?');
function saludarConNombre(nombrePersona) {
    alert('Bienvenido/a ' + nombrePersona + ' a la discográfica');
}
for (let i = 0; i < 1; i++) {
    saludarConNombre(nombrePersona);
}

let pass = '123';

for(let i=0; i <3; i++){
    let userPass = prompt('Ingresá tu contraseña ');

    if (pass == userPass){
        alert('Login exitoso');
        break; 
    }
}

let oferta = alert('Por nuestra apertura estamos dando un 10% de decuento en todos nuestros discos de Bon Jovi!!')

class Producto {
    constructor(nombre, precio, categoria){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.categoria = categoria;
        this.vendido = false
    }

    descuento(){
        this.precio = this.precio*0.90;
    }

    vender() {
        this.vendido = true
    }

}

let productoIngresado = prompt('Ingresa el nombre del discoIngresa el nombre del disco, tienes 3 opciones: \n1 - Slippery When Wet - 1986\n2 - New Jersey - 1988\n3 - These Days - 1995');
let precioIngresado = prompt('Ingresa el precio por unidad de venta');
let categoriaIngresada = prompt('Ingresa la categoría del producto');

const producto1 = new Producto(productoIngresado, precioIngresado, categoriaIngresada);

console.log(producto1);

producto1.descuento();
alert('El precio final del producto ' + producto1.nombre + ' es $' + producto1.precio);

producto1.vender();
console.log(producto1.vendido);

let agregar = alert ('Si querés agregar un CD de Bon Jovi más, ponlo a continuación:');

let continuar = true;

while (continuar) {

    let ingreso = prompt('Ingresa los datos del CD: Nombre, año, puntaje de 1 a 10, separados por una barra diagonal (/). Ingresa X para finalizar');

    if (ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    const extra = ingreso.split('/');
    console.log(extra);

    const disc = new disc(extra[0], extra[1], extra[2], extra[3]);
}